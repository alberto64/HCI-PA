angular.module('AppChat').controller('SignupController', ['$http', '$log', '$scope', '$location', '$route',
    function($http, $log, $scope, $location, $route) {
        var thisCtrl = this;

        $scope.loginForm = {};


        console.log("Got inside the js")

        $scope.goToLogin = function(){
            $location.path("/login");
            console.log($location);
        }

        $scope.signup = function(){
            var form = $scope.loginForm
            console.log("Got inside the function")

            alert("Sign Up Currently Disabled, use username:\'guest\' password: \'1234\',\n please contact administrator for more information: alberto.dejesus@upr.edu")
        };
}]);
