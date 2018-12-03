angular.module('AppChat').controller('settingsController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.loginForm = {};


        console.log("Got inside the js")
        $scope.login = function(){
            var form = $scope.loginForm


        };

        $scope.gotToNews = function(){
            $location.path("/newsfeed/" + $routeParams.uid);
            console.log("Got inside the function")
        };
}]);
