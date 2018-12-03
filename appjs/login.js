angular.module('AppChat').controller('LoginController', ['$http', '$log', '$scope', '$location', '$route',
    function($http, $log, $scope, $location, $route) {
        var thisCtrl = this;

        $scope.loginForm = {};


        console.log("Got inside the js")
        $scope.login = function(){
            var form = $scope.loginForm

            console.log("Got inside the function")

            if("alberto".localeCompare(form.username) == 0 && "querty1234".localeCompare(form.password) == 0)
            {
                $location.path("/newsfeed/" + 1);
                console.log($location);
            }
            if("guest".localeCompare(form.username) == 0)
            {
                $location.path("/newsfeed/" + 2);
                console.log($location);
            }
            else
            {
                alert("Username Doesn't Exist")
            }
        };

        $scope.signup = function(){
            var form = $scope.loginForm
            console.log("Got inside the function")

            alert("Sign Up Currently Disabled, use username:\'guest\' password: \'1234\',\n please contact administrator for more information: alberto.dejesus@upr.edu")
        };
}]);
