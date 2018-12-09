(function() {

    var app = angular.module('AppChat',['ngRoute']);

    app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider, $location) {
        $routeProvider.when('/login', {
            templateUrl: 'pages/login.html',
            controller: 'LoginController',
            controllerAs : 'loginForm'
        }).when('/signup', {
            templateUrl: 'pages/signup.html',
            controller: 'SignupController',
            controllerAs : 'signupForm'
        }).when('/chat/:cid/:uid', {
            templateUrl: 'pages/chat.html',
            controller: 'ChatController',
            controllerAs : 'chatCtrl'
        }).when('/chatlist/:uid', {
            templateUrl: 'pages/chatlist.html',
            controller: 'ChatListController',
            controllerAs : 'chatListCtrl'
        }).when('/chatedit', {
            templateUrl: 'pages/chatedit.html',
            controller: 'ChatEditController',
            controllerAs : 'chatEditCtrl'
        }).when('/useredit', {
            templateUrl: 'pages/useredit.html',
            controller: 'UserEditController',
            controllerAs : 'userCtrl'
        }).when('/messageinfo/:cid/:uid/:mid', {
            templateUrl: 'pages/messageinfo.html',
            controller: 'MessageController',
            controllerAs : 'messageCtrl'
        }).when('/participants/:cid/:uid', {
            templateUrl: 'pages/participantsAdd.html',
            controller: 'participantsController',
            controllerAs : 'partCtrl'
        }).when('/contacts/:uid', {
            templateUrl: 'pages/contactsAdd.html',
            controller: 'contactsController',
            controllerAs : 'contCtrl'
        }).when('/newsfeed/:uid', {
            templateUrl: 'pages/newsfeed.html',
            controller: 'newsController',
            controllerAs : 'newsCtrl'
        }).when('/therapy/:uid', {
            templateUrl: 'pages/therapy.html',
            controller: 'therapyController',
            controllerAs : 'therapyCtrl'
        }).when('/settings/:uid', {
            templateUrl: 'pages/settings.html',
            controller: 'settingsController',
            controllerAs : 'settingsCtrl'
        }).otherwise({
            redirectTo: '/login'
        });
    }]);

})();
