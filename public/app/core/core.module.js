(function () {
    'use strict';

    angular
        .module('templateApp.core', [])
        .factory('templateFactory', ['$http', '$q', function($http, $q) {
        
	    	var service = {
	    		fetch: fetch, 
	    		change: change,
	    		create: create,
	    		remove: remove
	    	};

	    	return service;

	        function fetch() {
	        	return $http.get("/api")
	        		.then(success)
	        		.catch(error);
	        }

	        function change() {
	        	return $http.put("/api")
	        		.then(success)
	        		.catch(error);
	        }

	        function create() {
	        	return $http.post("/api")
	        		.then(success)
	        		.catch(error);
	        }

	        function remove() {
	        	return $http.delete("/api")
	        		.then(success)
	        		.catch(error);
	        }

	        function success(res) {
	        	return res.data;
	        }

	        function error(err) {
	        	return $q.reject(err);
	        }
    	}]);
})();
