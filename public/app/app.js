(function () {
    'use strict';

    angular
    	.module('templateApp', [
                'ngRoute', 
                'templateApp.main',
                'templateApp.color'
            ]).config(configuration);

            configuration.$inject = ['$routeProvider', '$locationProvider'];

        /* @ngInject */
        function configuration($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
		    	templateUrl: 'app/features/index/section.html',
		    	controller: 'templateController'
			})
			.when('/color/:color', {
		    	templateUrl: 'app/features/color/color.html',
		    	controller: 'colorController'
			})
			.otherwise({
				redirectTo: '/'
			});
        	$locationProvider.html5Mode(true);
        }
})();