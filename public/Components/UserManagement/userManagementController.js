
app.controller('userManagementController', function($scope, $rootScope, $location,userManagementService){
    $scope.userDeleted=false;
    $scope.allUsers = userManagementService.query();

    $scope.deleteUser = function  (index,user){
        userManagementService.remove({id: user._id});
        $scope.allUsers.splice(index,1);
        $scope.userDeleted=true;
    };
});