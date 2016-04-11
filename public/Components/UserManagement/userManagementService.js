
app.factory('userManagementService', function($resource){

    return $resource('/user/users/:id');

});