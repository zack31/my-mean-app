
app.config(function($routeProvider){
    $routeProvider
        .when('/home', {
            templateUrl: 'Components/Home/home.html',
            controller: 'homeController'
        })
        .when('/article', {
            templateUrl: 'Components/Main/main.html',
            controller: 'mainController'
        })
        //the login display
        .when('/login', {
            templateUrl: 'Components/Login/login.html',
            controller: 'authController'
        })
        .when('/modifyPost', {
            templateUrl: 'Components/Main/modifyPost.html',
            controller: 'mainController'
        })
        .when('/map', {
            templateUrl: 'Components/Map/map.html',
            controller: 'mapController'
        })
        .when('/userManagement', {
            templateUrl: 'Components/UserManagement/userManagement.html',
            controller: 'userManagementController'
        })
        //the signup display
        .when('/register', {
            templateUrl: 'Components/Login/register.html',
            controller: 'authController'
        })
        .otherwise({redirectTo: '/home'});
});