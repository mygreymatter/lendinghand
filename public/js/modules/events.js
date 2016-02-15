(function () {
    angular.module('Events', [])
        .controller('EventsController', ['$scope', '$http',
        function ($scope, $http) {
                $scope.events = [];

                $http.get("/data.json").then(function (data) {
                    console.log("Success: " + data.data[1].name);
                    $scope.events = data.data;
                }, function (error) {
                    console.log("Error: " + error);
                });

                var home = angular.element(document.getElementById('home'));
                if (home.hasClass('active')) {
                    var contact = angular.element(document.getElementById('events'));
                    home.removeClass('active');
                    contact.addClass('active');
                }

        }]);
})();
