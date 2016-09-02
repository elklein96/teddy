(function () {
    'use strict';

    angular
        .module('templateApp.color')
        .directive('colorDirective', colorDirective);

    colorDirective.$inject = ['$rootScope'];

    /* @ngInject */
    function colorDirective($rootScope) {
        return {
            restrict: 'E',
            scope: {
              colorDirective: '&'
            },
            templateUrl: 'app/features/color/color.html',
            link: function(scope, element, attrs) {
                console.log("color directive");

                element.css({
                    'background-color': $rootScope.color
                });
            }
        };
    }
})();