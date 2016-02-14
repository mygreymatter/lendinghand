(function () {

    angular.module('Contact', [])
        .controller('ContactController', ['$scope',
            function ($scope) {
                console.log("Contact Controller");

                var home = angular.element(document.getElementById('home'));
                if (home.hasClass('active')) {
                    var contact = angular.element(document.getElementById('contact'));
                    home.removeClass('active');
                    contact.addClass('active');
                }

        }]);

})();
