(function () {
    angular.module('LendingHandApp', ['ui.router', 'Navigator', 'Home'])
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
                        controller: ''
                    });

                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
                $urlRouterProvider.otherwise('/')
            }]);
})();
