(function () {
    angular.module('Events', ['EventF'])
        .controller('EventsController', ['$scope', '$http', '$state', 'events',

        function ($scope, $http, $state, events) {
                console.log('Event Controller : ');
                $scope.events = events;

                setActive();

                $scope.showEvent = function (event) {
                    console.log('Show Event: ' + event);
                    $state.go('View', {
                        'id': event.id
                    });
                };

        }]).controller('EventViewController', ['$scope', '$stateParams', 'event',

        function ($scope, $stateParams, event) {
                console.log('Fetched Event: ' + event + " " + event.images_count);
                setActive();
                $scope.name = event.name;
                $scope.id = event.id;
                $scope.images = []

                for (var index = 1; index <= event.images_count; index++)
                    $scope.images.push(index);

        }]);

    function setActive() {
        var home = angular.element(document.getElementById('home'));
        if (home.hasClass('active')) {
            var contact = angular.element(document.getElementById('events'));
            home.removeClass('active');
            contact.addClass('active');
        }
    }
})();
