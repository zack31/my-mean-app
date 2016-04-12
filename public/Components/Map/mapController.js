var openlayers = angular.module('openlayers',['openLayersDirectiveModule']);

openlayers.controller('mapController', function($scope){

    $scope.option1= {
        a: 30, b: "Test ok!"
    };
    $scope.option2 = function() {
        $scope.clickDirective=true;
    };

});
