
app.factory('homeService', function($resource){

    return $resource('/home/home/:id');

});