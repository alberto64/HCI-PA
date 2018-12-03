angular.module('AppChat').controller('contactsController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.contCtrl = {};
        console.log("Got to contacts!")

        $scope.loadUsers = function(){
                    console.log("Got to load!")

                    $scope.contCtrl.userList = [{"fName": "Test", "pseudonym": "Testy",  "lName" : "User"}];
        };

        $scope.addContact = function(contact){
                    //var url = "http://quacker-pr.herokuapp.com/participants";
                    alert("User Added to Contacts");


        };



        $scope.goBack = function(){
                $location.path("/chatlist/" + $routeParams.uid);
        };
}]);

