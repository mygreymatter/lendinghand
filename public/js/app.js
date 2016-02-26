(function () {
    angular.module('LendingHandApp', ['ui.router', 'Navigator', 'Home', 'Contact', 'Events'])
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
                        controller: 'EventsController',
                        resolve: {
                            events: function (EventFactory) {
                                return EventFactory.getEvents();
                            }
                        }
                    }).state('View', {
                        url: '/view/:id',
                        templateUrl: '../views/eventview.html',
                        controller: 'EventViewController',
                        resolve: {
                            event: function (EventFactory, $stateParams) {
                                console.log('Resolving View');
                                return EventFactory.getEvent($stateParams.id);
                            }
                        }
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
