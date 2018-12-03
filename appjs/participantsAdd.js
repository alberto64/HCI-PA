angular.module('AppChat').controller('participantsController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.contCtrl = {};
        console.log("Got to contacts!");

        $scope.loadContacts = function(){
            console.log("Got to load!")

            $scope.contCtrl.userList = [{"fName": "Test", "pseudonym": "Testy",  "lName" : "User"}];
        };

        $scope.addParticipant = function(contact){
            var form = {"uid": $routeParams.uid, "contact" :contact, "cid": $routeParams.cid};
            console.log(form);
            //var url = "http://quacker-pr.herokuapp.com/participants";
            alert("Contact Added to Chat");


        };

        $scope.goBack = function(){
                $location.path("/chat/" + $routeParams.cid + "/" + $routeParams.uid);
        };
}]);

