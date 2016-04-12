var app = angular.module('chirpApp',
    [
        'ngRoute',
        'ngResource',
        'ngSanitize',
        'openLayersDirectiveModule',
        'openlayers',
        'bootstrapModal'
    ])
    .run(function($rootScope,$http) {

        $http.get('/auth/status')
            // handle success
            .success(function (data) {
                if(data.status){
                    $rootScope.authenticated = data.status;
                } else {
                    $rootScope.authenticated = data.status;
                }
                $rootScope.current_user = '';
            })
            // handle error
            .error(function (data) {
                $rootScope.authenticated = data.status;
                $rootScope.current_user = '';
            });
	
        $rootScope.signout = function(){
            $http.get('auth/signout');
            $rootScope.authenticated = false;
            $rootScope.current_user = '';
        };
    });







