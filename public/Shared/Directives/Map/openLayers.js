angular.module('openLayersDirectiveModule', ['ngSanitize'])
    .directive('openLayers', function() {

    return {
        restrict : 'E',//AC by default
        transclude: true,
        //replace: true,
        template: '{{option1}}</br>' +
        '<ng-transclude></ng-transclude>',
        scope:{
            option1: '=',
            option2: '&'
        },
        link: function (scope, element, attrs) {

        }
    };
});