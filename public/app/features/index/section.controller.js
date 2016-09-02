(function () {
    'use strict';

    angular
        .module('templateApp.main')
        .controller('templateController', templateController);

    templateController.$inject = ['$scope'];

    /* @ngInject */
    function templateController($scope){
    	$scope.foo = "bar";
    }

})();