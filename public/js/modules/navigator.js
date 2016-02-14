(function () {

    angular.module('Navigator', [])
        .controller('NavController', ['$scope', '$state', function ($scope, $state) {
            $scope.showContact = function () {
                console.log("Show Contact");
                $state.go('Contact');
            };
            $scope.showHome = function () {
                console.log("Show Home");
                $state.go('Home');
            };
    }])

})();
