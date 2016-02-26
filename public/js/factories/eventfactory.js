(function () {
    angular.module('EventF', [])
        .factory('EventFactory', ['$http', function ($http) {
            var o = {
                events: []
            };

            o.getEvents = function () {
                console.log('Getting Events');
                return $http.get('/data.json').then(function (response) {
                    console.log(response.data);
                    return angular.copy(response.data, o.events);
                }, function (error) {
                    console.log('GetEvents Failed: ' + error);
                    return [];
                });
            };

            o.getEvent = function (id) {
                console.log("GetEvent ID: " + id);
                var event = {};

                if (o.events.length === 0) {

                    return $http.get('/data.json').then(function (response) {
                        console.log(response.data);
                        angular.copy(response.data, o.events);

                        o.events.forEach(function (e) {
                            if (e.id === id)
                                event = e;
                        });

                        console.log("Return Event: " + event.name + " " + event.images_count);
                        return event;

                    }, function (error) {
                        console.log('GetEvents Failed: ' + error);

                    });
                } else {
                    o.events.forEach(function (e) {
                        console.log("GetEvent : " + e.name);
                        if (e.id === id)
                            event = e;
                    });

                    console.log("Return Event: " + event.name);
                    return event;
                }


            };

            return o;
        }])
})();
