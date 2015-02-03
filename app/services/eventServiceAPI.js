eventListingApp.factory('eventServiceAPI', [ '$q', '$rootScope', function($q, $rootScope) {

	function all() {

		var deferred = $q.defer();

		VividSeats.eventService.all(function(data) {
			$rootScope.$apply();
			deferred.resolve({data: data, error: null});
		}, function(error) {
			$rootScope.$apply();
			deferred.reject({data: null, error: error});
		});

		return deferred.promise;

	}

	function add(event) {

		var deferred = $q.defer();

		VividSeats.eventService.add(event, function(data) {
			deferred.resolve({data: data, error: null});
		}, function(error) {
			deferred.reject({data: null, error: error});
		});

		return deferred.promise;

	}

	function remove(event) {

		var deferred = $q.defer();

		VividSeats.eventService.remove(event, function(data) {
			deferred.resolve({data: data, error: null});
		}, function(error) {
			deferred.reject({data: null, error: error});
		});

		return deferred.promise;

	}

	function update(event) {

		var deferred = $q.defer();

		VividSeats.eventService.update(event, function(data) {
			deferred.resolve({data: data, error: null});
		}, function(error) {
			deferred.reject({data: null, error: error});
		});

		return deferred.promise;

	}

	return {
		all: all,
		add: add,
		remove: remove,
		update: update
	};
}]);