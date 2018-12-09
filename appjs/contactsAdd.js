angular.module('AppChat').controller('contactsController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.contCtrl = {};
        $scope.action = "Add";
        console.log("Got to contacts!")

        $scope.loadUsers = function(){
                    console.log("Got to load!")
                    $scope.action = "Add";
                    $scope.contCtrl.userList = [{"fName": "Test", "pseudonym": "Testy",  "lName" : "User"}];
        };

        $scope.loadContacts = function(){
                    console.log("Got to load!")
                    $scope.action = "Remove";
                    $scope.contCtrl.userList = [{"fName": "Test", "pseudonym": "Testy",  "lName" : "User"}];
        };

        $scope.addContact = function(contact){
                    //var url = "http://quacker-pr.herokuapp.com/participants";
                    if($scope.action.equals("Add")) {
                        alert("User Added to Contacts");
                    } else {
                        alert("User Deleted from Contacts");

                    }

        };



        $scope.goBack = function(){
                $location.path("/chatlist/" + $routeParams.uid);
        };
}]);

