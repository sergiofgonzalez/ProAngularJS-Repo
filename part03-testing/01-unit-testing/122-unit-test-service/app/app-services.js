(function() {
    'use strict';

    angular.module('exampleApp.Services', [])
        .factory('counterService', [function() {
            var counter = 0;
            return {
                incrementCounter: function() {
                    counter++;
                },
                getCounter: function() {
                    return counter;
                }
            };
        }]);
})();