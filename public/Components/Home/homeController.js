
app.controller('homeController', function(mainService, $scope, $rootScope,$location) {
    $scope.posts = mainService.query();
    
    
    
});