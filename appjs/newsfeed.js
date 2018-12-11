angular.module('AppChat').controller('newsController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.mainCtrl = {};
        $scope.chatForm = {};
        $scope.isGroupChat = 't';
        $scope.groupLabel = "YES";
        $scope.loginForm = {};



        $scope.goToChatList = function(){


                    $location.path("/chatlist/" + $routeParams.uid);
                    console.log($location);
        };

        $scope.goToTherapy = function(){


                    $location.path("/therapy/" + $routeParams.uid);
                    console.log($location);
        };

        $scope.loadChats = function(uid){

            console.log(uid);

            $scope.mainCtrl.chatList = [{"cID": 1, "cName" : "Maria Curie", "cTime" : "13/11/18",
            "url": "https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?cs=srgb&dl=adorable-animal-canine-257540.jpg&fm=jpg",
            "text": "This is my new Puppy Stan Marsh!!!!! Please welcome him! <3 <3 <3"},
             {"cID": 2, "cName" : "DoggyLover", "cTime" : "30/7/18",
             "url": "https://www.what-dog.net/Images/faces2/scroll0015.jpg",
             "text": "I give a paw out of 10 to this beautiful dog!"},
             {"cID": 4, "cName" : "CatLover", "cTime" : "30/7/18",
             "url": "https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100",
              "text": "This cat really puts a smile on my face!"}];


        };

        $scope.goToSetting = function(){
                $location.path("/settings/" + $routeParams.uid);
                console.log($location);
        };

        $scope.goToContacts = function(){
            $location.path("/contacts/" + $routeParams.uid);
        };

        $scope.logOut = function(){
            $location.path("/login");
        };

        $scope.goToChat = function(cid){
            console.log(cid);
            $location.path("/chat/" + cid + "/" + $routeParams.uid);
        };

        $scope.post = function() {
            var form = $scope.loginForm

            // $scope.mainCtrl.chatList = [{"cID": 1, "cName" : "Guest", "cTime" : Date.now(),"url": form.url,  "text": form.text}].push($scope.mainCtrl.chatList);
            console.log($scope.mainCtrl.chatList);
            alert("Feature disabled by admin, please contact: alberto.dejesus@upr.edu");
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

        $scope.goToPost = function(){
                alert("UGH");
                $location.path("/post/" + $routeParams.uid);
                console.log($location);
        };

        console.log("Got inside the second js")

        $scope.loadChats($routeParams.uid);


}]);
