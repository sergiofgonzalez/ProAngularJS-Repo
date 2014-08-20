/* jshint sub:true, browser: true */
(function() {
    'use strict';

    angular.module('exampleApp.Directives', [])
        .directive('unorderedList', [function() {
            return {
                link: function(scope, element, attrs) {
                    scope.data = scope[attrs['unorderedList']];
                    scope.listTitleText = attrs['listTitle'];
                },
                restrict: 'A',
                template: function () {
                    return angular.element(document.querySelector('#listTemplate')).html();
                }
            };
        }]);
})();