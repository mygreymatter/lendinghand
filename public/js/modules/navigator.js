(function () {

    angular.module('Navigator', [])
        .controller('NavController', ['$scope', '$state', function ($scope, $state) {
            var home = angular.element(document.getElementById('home')),
                mission = angular.element(document.getElementById('mission')),
                events = angular.element(document.getElementById('events')),
                donate = angular.element(document.getElementById('donate')),
                contact = angular.element(document.getElementById('contact'));

            var links = [home, mission, events, donate, contact];

            $scope.showContact = function () {
                console.log("Show Contact");
                $state.go('Contact');

                toggleActive(contact);
            };
            $scope.showHome = function () {
                console.log("Show Home");
                $state.go('Home');

                toggleActive(home);
            };

            $scope.showMission = function () {
                console.log("Show Mission");
                $state.go('Mission');

                toggleActive(mission);
            };

            $scope.showEvents = function () {
                console.log("Show Events");
                $state.go('Events');

                toggleActive(events);
            };

            $scope.showDonate = function () {
                console.log("Show Donate");
                $state.go('Donate');

                toggleActive(donate);
            };

            function toggleActive(newElement) {
                var isActiveFound = false;

                links.forEach(function (link) {
                    if (link.hasClass('active') && link !== newElement && !isActiveFound) {
                        newElement.addClass('active');
                        link.removeClass('active');
                        isActiveFound = true;
                    }
                });
            }

    }])

})();
