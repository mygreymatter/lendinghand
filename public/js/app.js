(function () {
    angular.module('LendingHandApp', ['ui.router', 'Navigator', 'Home', 'Contact'])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider) {
                $stateProvider
                    .state('Home', {
                        url: '/',
                        templateUrl: '../views/home.html',
                        controller: 'HomeController'
                    }).state('Contact', {
                        url: '/contact',
                        templateUrl: '../views/contact.html',
                        controller: 'ContactController'
                    }).state('Mission', {
                        url: '/mission',
                        templateUrl: '../views/mission.html',
                        controller: ''
                    }).state('Events', {
                        url: '/events',
                        templateUrl: '../views/events.html',
                        controller: ''
                    }).state('Donate', {
                        url: '/donate',
                        templateUrl: '../views/donate.html',
                        controller: ''
                    });

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/')
            }]);
})();
