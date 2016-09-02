(function () {
    'use strict';

    angular
        .module('templateApp.color')
        .controller('colorController', colorController);

    colorController.$inject = ['$scope', '$route', '$routeParams', 'templateFactory'];

    /* @ngInject */
    function colorController($scope, $route, $routeParams, templateFactory){
    	$scope.color = $routeParams.color;
    }

})();