
app.controller('mainController', function(mainService, $scope, $rootScope,$location){
    $scope.posts = mainService.query();
    $scope.newPost = {created_by: '', text: '', created_at: '', title:''};
    $scope.article_message_show=false;
    
    $scope.post = function() {
        $scope.newPost.created_by = $rootScope.current_user;
        $scope.newPost.created_at = Date.now();
        $scope.newPost.title = $scope.title;
        $scope.newPost.text = $scope.text;
console.log($scope.newPost);
        mainService.save($scope.newPost, function(){
            $scope.posts = mainService.query();
            $scope.article_message_show=true;
            $scope.newPost = {created_by: '', text: '', created_at: '', title:''};
        });
    };

    $scope.removePost = function(index,data){
        console.log(data);
        mainService.remove({id:data._id});
        //$scope.posts = mainService.query();
        $scope.posts.splice(index,1);
        $scope.newPost = {created_by: '', text: '', created_at: '', title:''};
    };

    $scope.modifyPost = function(data) {

        mainService.get({id: data._id}, function (post) {
            console.log(post);
            $scope.post = post;

        });
    };
});

