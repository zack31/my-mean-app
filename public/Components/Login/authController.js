app.controller('authController', function($scope, $http, $rootScope, $location,authService){
    $scope.user = {username: '', password: '', mail:'', address:'',phone:''};
    $scope.error_message = '/user/users';

    $scope.login = function(){
        $http.post('/auth/login', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else{
                $scope.error_message = data.message;
                $scope.error_message_show = true;
            }
        });
        //TODO AJAX pour que ca marche
        // authService.login($scope.user, function(data){
        //     if(data.state == 'success'){
        //         $rootScope.authenticated = true;
        //         $rootScope.current_user = data.user.username;
        //         $location.path('/');
        //     }
        //     else{
        //         $scope.error_message = data.message;
        //         $scope.error_message_show = true;
        //     }
        //
        // });
    };

    $scope.register = function(){
        $http.post('/auth/signup', $scope.user).success(function(data){
            if(data.state == 'success'){
                $rootScope.authenticated = true;
                $rootScope.current_user = data.user.username;
                $location.path('/');
            }
            else{
                $scope.error_message = data.message;
                $scope.error_message_show = true;
            }
        });
    };
});