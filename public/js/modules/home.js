(function () {
    angular.module('Home', ['simpleAngularTicker'])
        .controller('HomeController', ['$scope', '$state',
            function ($scope, $state) {
                $scope.name = "lengind home";
                $scope.myTickerItems = [
                    {
                        title: 'New Year Celebrations',
                        copy: 'A bunch of youngsters distributed affection and love.'
                    },
                    {
                        title: 'Republic Day',
                        copy: 'School students displayed the Godliness again.'
                    },
                    {
                        title: 'Valentine\'s Day',
                        copy: 'Some youngster celebrated the valentine\'s day here.'
                    },
                    {
                        title: 'Rekha\'s Birthday',
                        copy: 'Rekha on her birthday donated a website.'
                    },
                    {
                        title: 'Inmate\'s Birthday',
                        copy: 'An inmate\'s birthday celebrations.'
                    },
                    {
                        title: 'Fruits Distribution',
                        copy: 'Locals distributed fruits and some love.'
                    }
                ];


        }]);
})();
