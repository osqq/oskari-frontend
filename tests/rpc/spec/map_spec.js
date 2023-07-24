describe('Map', function () {

    beforeEach(function (done) {
        channel.onReady(function () {
            // Channel is now ready and listening.
            channel.resetState(function () {
                // Reset map and event counter.
                counter = 0;
                done();
            });
        });
    });

    afterEach(function () {
        // Spy callback.
        expect(counter).toEqual(1);
        // Reset event handlers.
        resetEventHandlers();
    });


    describe('Get available map layers', function () {

        it('Get all layers', function (done) {
            channel.getAllLayers(function (data) {
                // Expect atleast basemap layer to be found.
                expect(Object.keys(data).length).toBeGreaterThan(0);
                // Expect basemap layer to be have at least 4 elements.
                expect(Object.keys(data[0]).length).toBeGreaterThanOrEqual(4);
                // id, opacity, visible, name
                expect(data[0].id).toBeDefined();
                expect(data[0].opacity).not.toBeGreaterThan(100);
                expect(data[0].visible).toBeTruthy();
                expect(data[0].name).toBeDefined();
                //layer can have max/min zoom
                //expect(data.minZoom).toBeDefined();
                //expect(data.maxZoom).toBeDefined();

                channel.log('Get available map layers done. ', data);
                counter++;
                done();
            });
        });

    });


    describe('Change layer properties', function () {

        var baseLayer;

        beforeEach(function (done) {
            channel.getAllLayers(function (data) {
                baseLayer = data[0];
                done();
            })
        });

        it('Changes map layer opacity', function (done) {

            var layerId = baseLayer.id;
            var opacity = (baseLayer.opacity + 10) % 100;
            // Change layer opacity
            channel.postRequest('ChangeMapLayerOpacityRequest', [layerId, opacity]);

            channel.getAllLayers(function (data) {
                expect(data[0].opacity).not.toEqual(baseLayer.opacity);
                expect(data[0].opacity).toEqual(opacity);
                counter++;
                done();
            });
        });

        it('Changes map layer visibility', function (done) {

            var layerId = baseLayer.id;
            var visible = baseLayer.visible;

            // Change visibility
            channel.postRequest('MapModulePlugin.MapLayerVisibilityRequest', [layerId, !visible]);

            channel.getAllLayers(function (data) {
                expect(data[0].visible).not.toEqual(visible);
                expect(data[0].visible).toEqual(!visible);
            })

            // Toggle back
            channel.postRequest('MapModulePlugin.MapLayerVisibilityRequest', [layerId, visible]);

            channel.getAllLayers(function (data) {
                expect(data[0].visible).not.toEqual(!visible);
                expect(data[0].visible).toEqual(visible);
            })

            counter++;
            done();
        });

    });


    describe('Get map position', function () {

        it('Gets map position', function (done) {
            channel.getMapPosition(function (data) {
                // Expect getMapPosition data to have 5 elements.
                expect(Object.keys(data).length).toEqual(5);
                // coordinates
                expect(data.centerX).not.toBeLessThan(0);
                expect(data.centerY).not.toBeLessThan(0);
                // zoom is int
                expect(Math.trunc(data.zoom)).toEqual(data.zoom);
                // scale is int
                expect(Math.trunc(data.scale)).toEqual(data.scale);
                // srs
                expect(data.srsName).toMatch(/\d{1,}/);
                expect(data.srsName).toContain("EPSG");

                channel.log('Get Map Position done.', data);
                counter++;
                done();
            });
        });

    });


    describe('Move map', function () {

        it('Moves map on request', function (done) {

            // Handle event
            handleEvent('AfterMapMoveEvent', function (data) {
                channel.log('AfterMapMoveEvent launched!')
                expect(data.centerX).toEqual(x);
                expect(data.centerY).toEqual(y);
                expect(data.zoom).toEqual(zoomLevel);
                counter++;
                done();
            })

            // Move to this position
            var x = 552935;
            var y = 7332639;
            var zoomLevel = 7; // Not required in request

            // AfterMapMove event triggers only when starting position is not the same as end position
            channel.getMapPosition(function (data) {

                var xIsDifferent = data.centerX !== x;
                var yIsDifferent = data.centery !== y;
                var zoomIsDifferent = data.zoom !== zoomLevel;

                expect(xIsDifferent || yIsDifferent || zoomIsDifferent).toEqual(true);
            })
            channel.postRequest('MapMoveRequest', [x, y, zoomLevel])
        });

    });


    describe('Get map bounding box', function () {

        it('Gets map bbox', function (done) {
            channel.getMapBbox(function (data) {
                // Expect getMapBbox data to have 4 elements. 
                expect(Object.keys(data).length).toEqual(4);
                // Bbox varies by screen size
                expect(data.bottom).toEqual(jasmine.any(Number));
                expect(data.left).toEqual(jasmine.any(Number));
                expect(data.right).toEqual(jasmine.any(Number));
                expect(data.top).toEqual(jasmine.any(Number));

                channel.log('Get Map Bbox done.', data);
                counter++;
                done();
            });
        });

    });


    describe('Get a screenshot of the map', function () {

        it('Gets Screenshot', function (done) {
            channel.getScreenshot(function (data) {
                setTimeout(function () {
                    // Encode then decode and compare to the original.
                    expect(atob(btoa(data))).toEqual(data);
                    expect(Object.keys(data).length).toBeGreaterThan(1000);
                    expect(data).toContain("data:image/png;base64,");

                    channel.log('Get Screenshot done.');
                    counter++;
                    done();
                }, 1000);
            });
        });

    });


    describe('Rotate map', function () {

        beforeEach(function (done) {
            // Save map position
            channel.getMapPosition(function (data) {
                defaultPosition = data;
                done();
            });
        });

        it('Rotates 180', function (done) {
            // Listen AfterMapMoveEvent occurs and position stays same as before rotation
            handleEvent('AfterMapMoveEvent', function (data) {
                channel.log('AfterMapMoveEvent launched!');
                expect(data.centerX).toEqual(defaultPosition.centerX);
                expect(data.centerY).toEqual(defaultPosition.centerY);
                expect(data.zoom).toEqual(defaultPosition.zoom);
                counter++;
                done();
            });
            // rotate.map 180 degrees
            channel.postRequest('rotate.map', [180]);

            // Expect that map was rotated
            channel.getCurrentState(function (data) {
                expect(data.maprotator.state.degrees).toEqual(180);
            });
            channel.log('rotate.map 180 request done.');
        });

        it('Resets rotation', function (done) {
            channel.postRequest('rotate.map', []);

            // Expect that map rotation was reset
            channel.getCurrentState(function (data) {
                expect(data.maprotator.state.degrees).toEqual(0);
            });

            channel.log('rotate.map reset.');
            counter++;
            done();
        });

    });


    describe('Zoom functions', function () {

        var zoom;
        var position;

        beforeEach(function (done) {
            channel.zoomTo([1], function () {
                //Save current zoom.
                channel.getZoomRange(function (data) {
                    zoom = data;
                    channel.getMapPosition(function (data) {
                        position = data;
                        done();
                    });
                });
            });
        });

        function handleAfterMapMoveEvent () {
            handleEvent('AfterMapMoveEvent', function (data) {
                channel.log('AfterMapMoveEvent launched!');

                // Zoom functions do not move the map
                expect(data.centerX).toEqual(position.centerX);
                expect(data.centerY).toEqual(position.centerY);
                // Zoom and scale change 
                expect(data.zoom).not.toEqual(position.zoom);
                expect(data.scale).not.toEqual(position.scale);
            });
        }

        it('Gets Zoom Range', function (done) {
            channel.getZoomRange(function (data) {
                // Expect getzoom data to have 3 elements.
                expect(Object.keys(data).length).toEqual(3);

                // Data contains integers
                expect(data.min).toEqual(jasmine.any(Number));
                expect(Math.trunc(data.min)).toEqual(data.min);
                expect(data.min).not.toBeLessThan(0);

                expect(data.max).toEqual(jasmine.any(Number));
                expect(Math.trunc(data.max)).toEqual(data.max);
                expect(data.max).toBeGreaterThan(0);

                expect(data.current).toEqual(jasmine.any(Number));
                expect(Math.trunc(data.current)).toEqual(data.current);
                expect(data.current).not.toBeLessThan(0);

                channel.log('Get Zoom Range done.', data);
                counter++
                done();
            });
        });

        it('Zooms in', function (done) {

            // Expect zoom in to trigger an event
            handleAfterMapMoveEvent();

            channel.zoomIn(function (data) {
                // Expect zoom to be +1.
                expect(data).toEqual(zoom.current + 1);

                expect(data).not.toBeLessThan(zoom.min);
                expect(data).not.toBeGreaterThan(zoom.max);

                channel.log('Zoom level after zoomIn: ', data);
                counter++
                done();
            });
        });

        it('Does not zoom past max limit', function (done) {
            channel.zoomTo([zoom.max], function () {});

            channel.zoomIn(function (data) {
                expect(data).toEqual(zoom.max);
            });

            channel.log('Zoom past max limit done.');
            counter++;
            done();
        })

        it('Zooms out', function (done) {
            // Expect zoom out to trigger an event
            handleAfterMapMoveEvent();

            channel.zoomOut(function (data) {
                // Expect zoom to be decremented by 1.
                expect(data).toEqual(zoom.current - 1);

                expect(data).not.toBeLessThan(zoom.current - 1);
                expect(data).not.toBeGreaterThan(zoom.current);

                expect(data).not.toBeLessThan(zoom.min);
                expect(data).not.toBeGreaterThan(zoom.max);

                channel.log('Zoom level after zoomOut: ', data);
                counter++
                done();
            });
        });

        it('Does not zoom below min limit', function (done) {
            channel.zoomTo([zoom.min], function () {});

            channel.zoomOut(function (data) {
                expect(data).toEqual(zoom.min);
            });

            channel.log('Zoom below min limit done.')
            counter++;
            done();
        })

        it('Zooms To 5', function (done) {
            channel.zoomTo([5], function (data) {
                // Expect zoom to be 5.
                expect(data).toEqual(5);

                channel.log('Zoom level after zoom to 5: ', data);
                counter++
                done();
            });
        });
    });


    describe('Handle map state', function () {

        var savedState;

        beforeEach(function (done) {
            //Save map position for testing.
            channel.getMapPosition(function (data) {
                defaultPosition = data;
            });
            //Save layer for testing.
            channel.getAllLayers(function (data) {
                defaultLayer = data;
            });
            // Save state for loading.
            channel.getCurrentState(function (data) {
                savedState = data;
            });
            done();
        });

        it('Resets state', function (done) {
            // Expect StateChangedEvent to occur after resetState.
            handleEvent('StateChangedEvent', function (data) {
                channel.log('StateChangedEvent launched!');
                const position = data.current.mapfull.state;
                // Expect map moved to default position.
                expect(position.east).toEqual(defaultPosition.centerX);
                expect(position.north).toEqual(defaultPosition.centerY);
                expect(position.zoom).toEqual(defaultPosition.zoom);
                //expect(data.scale).toEqual(defaultPosition.scale);

                // State after reset is same as starting state, object deep equality
                expect(data.current).toEqual(savedState);

                channel.log('ResetState moved map:', data);
                counter++;
                done();
            });
            // Reset state.
            channel.resetState(function () { });
        });

        it('Saves state', function (done) {
            // Get current state.
            channel.getCurrentState(function (data) {
                // Mapfull contains state and layer info.
                expect(data).toEqual(jasmine.objectContaining({
                    mapfull: jasmine.objectContaining({
                        state: jasmine.objectContaining({

                            north: defaultPosition.centerY,
                            east: defaultPosition.centerX,
                            zoom: defaultPosition.zoom,
                            srs: defaultPosition.srsName,

                            // Every layer contains at least these fields
                            selectedLayers: jasmine.arrayContaining([jasmine.objectContaining({
                                id: jasmine.any(Number),
                                opacity: jasmine.any(Number),
                                //style:"default"
                            })])
                        })
                    })
                }));

                // Expect toolbar, map.rotator and plugin settings to be found.
                expect(data.toolbar).toBeDefined();
                expect(data.maprotator).toBeDefined();
                expect(data.mapfull.state.plugins).toBeDefined();
                // Basemap layer is at 0.
                //expect(defaultLayer[0]).toEqual(jasmine.objectContaining(data.mapfull.state.selectedLayers[0]));

                channel.log('GetCurrentState: ', data);
                counter++;
                done();
            });
        });

        it('Loads state', function (done) {
            // Expect StateChangedEvent to occur after useState.
            handleEvent('StateChangedEvent', function (data) {
                channel.log('StateChangedEvent launched!');
                const position = data.current.mapfull.state;
                // Expect map moved to default position.
                expect(position.east).toEqual(defaultPosition.centerX);
                expect(position.north).toEqual(defaultPosition.centerY);
                expect(position.zoom).toEqual(defaultPosition.zoom);
                //expect(data.scale).toEqual(defaultPosition.scale);

                // Expect state object is equal to saved state
                channel.getCurrentState(function (data) {
                    expect(data).toEqual(savedState);
                });

                channel.log('UseState moved map:', data);
                counter++;
                done();
            });
            // Use saved state.
            channel.useState([savedState], function () {
                channel.log('UseState: ', savedState);
            });
        });
    });

    describe('Map tour', function () {

        it('Tours the map', function (done) {

            handleEvent('MapTourEvent', function (data) {
                channel.log('MapTourEvent launched!');
                eventCounter++;
                // Tour is finished when in last location
                if (data.status.steps === data.status.step) {
                    expect(data.completed).toEqual(true);
                }
            });

            var eventCounter = 0;
            var routeSteps = [
                {
                  "lon": 488704,
                  "lat": 6939136
                },
                {
                  "lon": 338704,
                  "lat": 6789136
                },
                {
                  "lon": 563704,
                  "lat": 6939136
                }
              ];
            var stepDefaults = {
                "zoom": 8,
                "animation": "fly",
                "duration": 1,
                "srsName": "EPSG:3067"
            };

            channel.postRequest('MapTourRequest', [routeSteps, stepDefaults]);

            setTimeout(function () {}, 2000);

            expect(eventCounter).toEqual(routeSteps.length + 1);

            channel.log('Map tour done.');
            counter++;
            done();
        });

    });

});



