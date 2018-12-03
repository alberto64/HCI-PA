angular.module('AppChat').controller('therapyController', ['$http', '$log', '$scope', '$routeParams', '$location', '$route',
    function($http, $log, $scope, $routeParams, $location, $route) {
        var thisCtrl = this;

        $scope.mainCtrl = {};
        $scope.chatForm = {};
        $scope.isGroupChat = 't';
        $scope.groupLabel = "YES";

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

        $scope.backToNews = function(){
            $location.path("/newsfeed/" + $routeParams.uid);
        };


        console.log("Got inside the second js")

        $scope.loadChats($routeParams.uid);


}]);
