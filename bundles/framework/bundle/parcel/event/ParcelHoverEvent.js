Oskari.clazz.define(
        'Oskari.mapframework.parcel.event.ParcelHoverEvent',
        function(pLonlat, pEvent, zoomLevel) {
            this._creator = null;
            this._lonlat = pLonlat;
            this._hoverEvent = pEvent;
            this._zoom = zoomLevel; // 0-12
        }, {
            __name : "Parcel.ParcelHoverEvent",
            getName : function() {
                return this.__name;
            },
            getHoverEvent : function() {
                return this._hoverEvent;
            },
            getLonLat : function() {
                return this._lonlat;
            },
            getZoomLevel : function() {
                return this._zoom;
            }
        },
        {
            'protocol' : ['Oskari.mapframework.event.Event']
        });

/* Inheritance */

