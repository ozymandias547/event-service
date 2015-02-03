eventListingApp.controller('addEventCtrl', ['$scope', '$modalInstance', 'events', 'eventServiceAPI', function($scope, $modalInstance, events, eventServiceAPI) {

	$scope.event = {};

	$scope.ok = function () {

		var newestEvent = _.max(events, function(ev){
			return ev.id;
		});

		$scope.event.id = newestEvent.id + 1;

		eventServiceAPI
			.add($scope.event)
			.then(function() {
				$modalInstance.close();
			})
			.catch(function(result) {
				alert(result.error);
			});

	};

	$scope.cancel = function () {
		$modalInstance.close();
	};

}]);
