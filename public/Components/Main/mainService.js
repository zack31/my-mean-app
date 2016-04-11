
app.factory('mainService', function($resource){

    return $resource('/api/posts/:id');

});