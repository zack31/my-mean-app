angular.module('openLayersDirectiveModule', ['ngSanitize'])
    .directive('openLayers', function() {

    return {
        restrict : 'E',//AC by default
        transclude: false,
        //replace: true,
        link: function (scope, element, attrs) {
            var map = new ol.Map({
                target: 'map',
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.MapQuest({layer: 'sat'})
                    })
                ],
                view: new ol.View({
                    center: ol.proj.fromLonLat([37.41, 8.82]),
                    zoom: 4
                })
            });
        }
        // link: function (scope, element, attrs) {
        //     var raster = new ol.layer.Tile({
        //         source: new ol.source.MapQuest({layer: 'sat'})
        //     });
        //
        //     var map = new ol.Map({
        //         layers: [raster],
        //         target: 'map',
        //         view: new ol.View({
        //             center: [-11000000, 4600000],
        //             zoom: 4
        //         })
        //     });
        //
        //     var features = new ol.Collection();
        //     var featureOverlay = new ol.layer.Vector({
        //         source: new ol.source.Vector({features: features}),
        //         style: new ol.style.Style({
        //             fill: new ol.style.Fill({
        //                 color: 'rgba(255, 255, 255, 0.2)'
        //             }),
        //             stroke: new ol.style.Stroke({
        //                 color: '#ffcc33',
        //                 width: 2
        //             }),
        //             image: new ol.style.Circle({
        //                 radius: 7,
        //                 fill: new ol.style.Fill({
        //                     color: '#ffcc33'
        //                 })
        //             })
        //         })
        //     });
        //     featureOverlay.setMap(map);
        //
        //     var modify = new ol.interaction.Modify({
        //         features: features,
        //         // the SHIFT key must be pressed to delete vertices, so
        //         // that new vertices can be drawn at the same position
        //         // of existing vertices
        //         deleteCondition: function(event) {
        //             return ol.events.condition.shiftKeyOnly(event) &&
        //                 ol.events.condition.singleClick(event);
        //         }
        //     });
        //     map.addInteraction(modify);
        //
        //     var draw; // global so we can remove it later
        //     var typeSelect = document.getElementById('type');
        //
        //     function addInteraction() {
        //         draw = new ol.interaction.Draw({
        //             features: features,
        //             type: /** @type {ol.geom.GeometryType} */ (typeSelect.value)
        //         });
        //         map.addInteraction(draw);
        //     }
        //
        //
        //     /**
        //      * Handle change event.
        //      */
        //     typeSelect.onchange = function() {
        //         map.removeInteraction(draw);
        //         addInteraction();
        //     };
        //
        //     addInteraction();
        // }
    };
});