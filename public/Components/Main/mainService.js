
app.factory('mainService', function($resource){

    return $resource('/article/posts/:id');

});