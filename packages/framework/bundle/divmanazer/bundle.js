/**
 * @class Oskari.userinterface.bundle.ui.UserInterfaceBundle
 *
 *
 */
Oskari.clazz.define("Oskari.userinterface.bundle.ui.UserInterfaceBundle", function() {

}, {
    /**
     * @method create creates an Oskari DIV Manager instance
     * @return {Oskari.userinterface.bundle.ui.UserInterfaceBundleInstance}
     */
    "create": function() {

        return Oskari.clazz.create("Oskari.userinterface.bundle.ui.UserInterfaceBundleInstance");
    },
    /**
     * @method update called by the bundle manager to inform on changes in
     * bundlage
     */
    "update": function(manager, bundle, bi, info) {

    }
}, {
    /**
     * @static
     * @property protocol protocols implemented by this bundle
     */
    "protocol": ["Oskari.bundle.Bundle"],
    "source": {
        /**
         * @static
         * @property source.scripts
         *
         */
        "scripts": [{
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/instance.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Component.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/AddExtensionRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/AddExtensionRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/RemoveExtensionRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/RemoveExtensionRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/UpdateExtensionRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/UpdateExtensionRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/ModalDialogRequest.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/request/ModalDialogRequestHandler.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/event/ExtensionUpdatedEvent.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/event/UIChangeEvent.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Accordion.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/AccordionPanel.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/TabContainer.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/TabDropdownContainer.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/TabPanel.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Badge.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Popup.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/PopupService.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Overlay.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Button.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Form.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/SearchForm.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/UIHelper.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/FormInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Popover.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Grid.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/GridSort.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/GridPaging.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/GridSelection.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/GridModel.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/ProgressSpinner.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/ProgressBar.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Container.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Fieldset.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/FormComponent.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/Select.js"

            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/SelectList.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/MultiLevelSelect.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/RadioButtonGroup.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/CheckboxInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/ColorPickerInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/FileInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/TextInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/EmailInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/NumberInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultModule.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultView.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/SearchInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/UrlInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/TextAreaInput.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/AddButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/CancelButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/CloseButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/DeleteButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/EditButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/ExitButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/OkButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/SubmitButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/SaveButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/component/buttons/SearchButton.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultTile.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultFlyout.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/ExtraFlyout.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultExtension.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultView.js"
            }, {
                "type": "text/javascript",
                "src": "../../../../bundles/framework/divmanazer/extension/DefaultLayout.js"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/divman.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/accordion.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/tab.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/modal.scss"
            },
            {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/selectlist.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/badge.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/formcomponent.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/forminput.scss"
            },{
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/css/fileinput.css"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/grid.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/popup.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/button.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/overlay.scss"
            }, {
                "type": "text/css",
                "src": "../../../../bundles/framework/divmanazer/resources/scss/popover.scss"
            }, {
                "type": "text/javascript",
                "src": "../../../../libraries/jquery/plugins/jquery-placeholder/jquery.placeholder.js"
            }, {
                // NOTE! EXTERNAL LIBRARY!
                "type" : "text/javascript",
                "src" : "../../../../libraries/spectrum/spectrum-min.js"
            }, {
                "type" : "text/css",
                "src" : "../../../../libraries/spectrum/spectrum.css"
            }
        ],
        "locales": [{
            "lang": "af",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/af.js"
        }, {
            "lang": "ak",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ak.js"
        }, {
            "lang": "am",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/am.js"
        }, {
            "lang": "ar",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ar.js"
        }, {
            "lang": "az",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/az.js"
        }, {
            "lang": "be",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/be.js"
        }, {
            "lang": "bg",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/bg.js"
        }, {
            "lang": "bm",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/bm.js"
        }, {
            "lang": "bn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/bn.js"
        }, {
            "lang": "bo",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/bo.js"
        }, {
            "lang": "br",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/br.js"
        }, {
            "lang": "bs",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/bs.js"
        }, {
            "lang": "ca",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ca.js"
        }, {
            "lang": "cs",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/cs.js"
        }, {
            "lang": "cy",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/cy.js"
        }, {
            "lang": "da",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/da.js"
        }, {
            "lang": "de",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/de.js"
        }, {
            "lang": "dz",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/dz.js"
        }, {
            "lang": "ee",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ee.js"
        }, {
            "lang": "el",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/el.js"
        }, {
            "lang": "en",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/en.js"
        }, {
            "lang": "eo",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/eo.js"
        }, {
            "lang": "es",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/es.js"
        }, {
            "lang": "et",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/et.js"
        }, {
            "lang": "eu",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/eu.js"
        }, {
            "lang": "fa",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/fa.js"
        }, {
            "lang": "ff",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ff.js"
        }, {
            "lang": "fi",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/fi.js"
        }, {
            "lang": "fo",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/fo.js"
        }, {
            "lang": "fr",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/fr.js"
        }, {
            "lang": "fy",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/fy.js"
        }, {
            "lang": "ga",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ga.js"
        }, {
            "lang": "gd",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/gd.js"
        }, {
            "lang": "gl",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/gl.js"
        }, {
            "lang": "gu",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/gu.js"
        }, {
            "lang": "ha",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ha.js"
        }, {
            "lang": "he",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/he.js"
        }, {
            "lang": "hi",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/hi.js"
        }, {
            "lang": "hr",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/hr.js"
        }, {
            "lang": "hu",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/hu.js"
        }, {
            "lang": "hy",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/hy.js"
        }, {
            "lang": "ia",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ia.js"
        }, {
            "lang": "id",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/id.js"
        }, {
            "lang": "ig",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ig.js"
        }, {
            "lang": "is",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/is.js"
        }, {
            "lang": "it",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/it.js"
        }, {
            "lang": "ja",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ja.js"
        }, {
            "lang": "ka",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ka.js"
        }, {
            "lang": "ki",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ki.js"
        }, {
            "lang": "kk",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/kk.js"
        }, {
            "lang": "kl",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/kl.js"
        }, {
            "lang": "km",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/km.js"
        }, {
            "lang": "kn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/kn.js"
        }, {
            "lang": "ko",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ko.js"
        }, {
            "lang": "ks",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ks.js"
        }, {
            "lang": "kw",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/kw.js"
        }, {
            "lang": "ky",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ky.js"
        }, {
            "lang": "lb",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/lb.js"
        }, {
            "lang": "lg",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/lg.js"
        }, {
            "lang": "ln",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ln.js"
        }, {
            "lang": "lo",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/lo.js"
        }, {
            "lang": "lt",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/lt.js"
        }, {
            "lang": "lu",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/lu.js"
        }, {
            "lang": "lv",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/lv.js"
        }, {
            "lang": "mg",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/mg.js"
        }, {
            "lang": "mk",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/mk.js"
        }, {
            "lang": "ml",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ml.js"
        }, {
            "lang": "mn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/mn.js"
        }, {
            "lang": "mr",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/mr.js"
        }, {
            "lang": "ms",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ms.js"
        }, {
            "lang": "mt",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/mt.js"
        }, {
            "lang": "my",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/my.js"
        }, {
            "lang": "nb",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/nb.js"
        }, {
            "lang": "nd",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/nd.js"
        }, {
            "lang": "ne",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ne.js"
        }, {
            "lang": "nl",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/nl.js"
        }, {
            "lang": "nn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/nn.js"
        }, {
            "lang": "om",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/om.js"
        }, {
            "lang": "or",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/or.js"
        }, {
            "lang": "os",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/os.js"
        }, {
            "lang": "pa",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/pa.js"
        }, {
            "lang": "pl",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/pl.js"
        }, {
            "lang": "ps",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ps.js"
        }, {
            "lang": "pt",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/pt.js"
        }, {
            "lang": "qu",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/qu.js"
        }, {
            "lang": "rm",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/rm.js"
        }, {
            "lang": "rn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/rn.js"
        }, {
            "lang": "ro",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ro.js"
        }, {
            "lang": "ru",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ru.js"
        }, {
            "lang": "rw",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/rw.js"
        }, {
            "lang": "se",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/se.js"
        }, {
            "lang": "sg",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sg.js"
        }, {
            "lang": "si",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/si.js"
        }, {
            "lang": "sk",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sk.js"
        }, {
            "lang": "sl",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sl.js"
        }, {
            "lang": "sn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sn.js"
        }, {
            "lang": "so",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/so.js"
        }, {
            "lang": "sq",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sq.js"
        }, {
            "lang": "sr",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sr.js"
        }, {
            "lang": "sv",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sv.js"
        }, {
            "lang": "sw",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/sw.js"
        }, {
            "lang": "ta",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ta.js"
        }, {
            "lang": "te",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/te.js"
        }, {
            "lang": "th",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/th.js"
        }, {
            "lang": "ti",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ti.js"
        }, {
            "lang": "tn",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/tn.js"
        }, {
            "lang": "to",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/to.js"
        }, {
            "lang": "tr",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/tr.js"
        }, {
            "lang": "ts",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ts.js"
        }, {
            "lang": "ug",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ug.js"
        }, {
            "lang": "uk",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/uk.js"
        }, {
            "lang": "ur",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/ur.js"
        }, {
            "lang": "uz",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/uz.js"
        }, {
            "lang": "vi",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/vi.js"
        }, {
            "lang": "yi",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/yi.js"
        }, {
            "lang": "yo",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/yo.js"
        }, {
            "lang": "zh",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/zh.js"
        }, {
            "lang": "zu",
            "type": "text/javascript",
            "src": "../../../../bundles/framework/divmanazer/resources/locale/zu.js"
        }]

    },
    "bundle": {
        /**
         * @static
         * @property bundle.manifest
         */
        "manifest": {
            "Bundle-Identifier": "ui",
            "Bundle-Name": "ui",
            "Bundle-Tag": {
                "mapframework": true
            },

            "Bundle-Author": [{
                "Name": "jjk",
                "Organisation": "nls.fi",
                "Temporal": {
                    "Start": "2009",
                    "End": "2011"
                },
                "Copyleft": {
                    "License": {
                        "License-Name": "EUPL",
                        "License-Online-Resource": "http://www.paikkatietoikkuna.fi/license"
                    }
                }
            }],
            "Bundle-Name-Locale": {
                "fi": {
                    "Name": " kpI",
                    "Title": " kpI"
                },
                "en": {}
            },
            "Bundle-Version": "1.0.0",
            "Import-Namespace": ["Oskari"],
            "Import-Bundle": {}
        }
    }
});

Oskari.bundle_manager.installBundleClass("divmanazer", "Oskari.userinterface.bundle.ui.UserInterfaceBundle");
