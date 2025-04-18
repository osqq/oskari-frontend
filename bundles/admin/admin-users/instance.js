import './Flyout';
import './Tile';

/**
 * @class Oskari.mapframework.bundle.admin-users.AdminUsersBundleInstance
 *
 * User control for admins
 *
 * See Oskari.mapframework.bundle.admin-users.AdminUsersBundle for bundle definition.
 *
 */
Oskari.clazz.define('Oskari.mapframework.bundle.admin-users.AdminUsersBundleInstance',

    /**
     * @method create called automatically on construction
     * @static
     */
    function () {
        this.sandbox = null;
        this.started = false;
        this.plugins = {};
        this.loc = Oskari.getMsg.bind(null, this.getName());
    }, {
        /**
         * @static
         * @property __name
         */
        __name: 'AdminUsers',
        /**
         * @method getName
         * @return {String} the name for the component
         */
        getName: function () {
            return this.__name;
        },
        /**
         * @method setSandbox
         * @param {Oskari.Sandbox} sandbox
         * Sets the sandbox reference to this component
         */
        setSandbox: function (sandbox) {
            this.sandbox = sandbox;
        },
        /**
         * @method getSandbox
         * @return {Oskari.Sandbox}
         */
        getSandbox: function () {
            return this.sandbox;
        },
        /**
         * @method start
         * implements BundleInstance protocol start methdod
         */
        start: function () {
            if (this.started) {
                return;
            }
            this.started = true;

            const sandboxName = this.conf?.sandbox || 'sandbox';
            const sandbox = Oskari.getSandbox(sandboxName);
            sandbox.register(this);
            this.sandbox = sandbox;

            const request = Oskari.requestBuilder('userinterface.AddExtensionRequest')(this);
            sandbox.request(this, request);
        },
        /**
         * @method init
         * implements Module protocol init method - does nothing atm
         */
        init: function () {
            return null;
        },
        /**
         * @method update
         * implements BundleInstance protocol update method - does nothing atm
         */
        update: function () {

        },
        /**
         * @method onEvent
         * @param {Oskari.mapframework.event.Event} event a Oskari event object
         * Event is handled forwarded to correct #eventHandlers if found or discarded if not.
         */
        onEvent: function (event) {},

        /**
         * @method stop
         * implements BundleInstance protocol stop method
         */
        stop: function () {
            const request = Oskari.requestBuilder('userinterface.RemoveExtensionRequest')(this);
            this.sandbox.request(this, request);

            this.sandbox.unregister(this);
            this.started = false;
        },
        /**
         * @method startExtension
         * implements Oskari.userinterface.Extension protocol startExtension method
         * Creates a flyout and a tile:
         * Oskari.mapframework.bundle.admin-users.Flyout
         * Oskari.mapframework.bundle.admin-users.Tile
         */
        startExtension: function () {
            this.plugins['Oskari.userinterface.Flyout'] = Oskari.clazz.create('Oskari.mapframework.bundle.admin-users.Flyout', this);

            this.plugins['Oskari.userinterface.Tile'] = Oskari.clazz.create('Oskari.mapframework.bundle.admin-users.Tile', this);
        },
        /**
         * @method stopExtension
         * implements Oskari.userinterface.Extension protocol stopExtension method
         * Clears references to flyout and tile
         */
        stopExtension: function () {
            this.plugins['Oskari.userinterface.Flyout'] = null;
            this.plugins['Oskari.userinterface.Tile'] = null;
        },
        /**
         * @method getPlugins
         * implements Oskari.userinterface.Extension protocol getPlugins method
         * @return {Object} references to flyout and tile
         */
        getPlugins: function () {
            return this.plugins;
        },
        /**
         * @method getTitle
         * @return {String} localized text for the title of the component
         */
        getTitle: function () {
            return this.loc('title');
        },
        /**
         * @method getDescription
         * @return {String} localized text for the description of the component
         */
        getDescription: function () {
            return this.loc('desc');
        }
    }, {
        /**
         * @property {String[]} protocol
         * @static
         */
        protocol: ['Oskari.bundle.BundleInstance', 'Oskari.mapframework.module.Module', 'Oskari.userinterface.Extension']
    });
