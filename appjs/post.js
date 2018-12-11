angular.module('AppChat').controller('postController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.loginForm = {};


        console.log("Got inside the js")
        $scope.save = function(){
            alert("Saving Function Deactivated: If active the page would have refresh and give a save notification");

        };

        $scope.gotToNews = function(){
            $location.path("/newsfeed/" + $routeParams.uid);
            console.log("Got inside the function")
        };
}]);
