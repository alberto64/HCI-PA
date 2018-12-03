angular.module('AppChat').controller('ChatListController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.mainCtrl = {};
        $scope.chatForm = {};
        $scope.isGroupChat = 't';
        $scope.groupLabel = "YES";

        $scope.loadChats = function(uid){

            console.log(uid);

            $scope.mainCtrl.chatList = [{"cID": 1, "cName" : "Test Chat", "cTime" : "13/11/18"}, {"cID": 2, "cName" : "Second Chat", "cTime" : "30/7/18"}, {"cID": 4, "cName" : "Third Chat", "cTime" : "30/7/18"}];


        };

        $scope.goToContacts = function(){
            $location.path("/contacts/" + $routeParams.uid);
        };

        $scope.goToFeed = function(){
                    $location.path("/newsfeed/" + $routeParams.uid);
                    console.log($location);
        };

        $scope.goToChat = function(cid){
            console.log(cid);
            $location.path("/chat/" + cid + "/" + $routeParams.uid);
        };

        $scope.group = function(text) {
            if(text == 'YES') {
                $scope.isGroupChat = 't';
                $scope.groupLabel = text;
            }
            else {
                $scope.isGroupChat = 'f'; 
                $scope.groupLabel = text;
            }
        }

        $scope.create = function(){
            var form = $scope.chatForm;
            form.uid = $routeParams.uid;
            form.isGroupChat = $scope.isGroupChat;
            console.log("Got inside the function")

            alert("Feature Unavailable, please contact admin for more information. alberto.dejesus@upr.edu");
            //$scope.mainCtrl.chatList.push({"cid": 3, "cName" : form.cname , "cTime" : form.cTime });



            // Now set up the $http object
            // It has two function call backs, one for success and one for error

        };

        console.log("Got inside the second js")

        $scope.loadChats($routeParams.uid);


}]);
