(function () {
    'use strict';

    angular
        .module('templateApp.main')
        .directive('templateDirective', templateDirective);

    templateDirective.$inject = ['$rootScope'];

    /* @ngInject */
    function templateDirective($rootScope) {
        return {
            restrict: 'E',
            scope: {
            	foo: "bar"
            },
            templateUrl: 'app/features/index/section.html',
            link: function(scope, element, attrs) {
                console.log("fire");
            }
        };
    }
})();