eventListingApp.controller('editEventCtrl', ['$scope', '$modalInstance', 'event', 'eventServiceAPI', function($scope, $modalInstance, event, eventServiceAPI) {

	$scope.newEvent = _.clone(event);

	$scope.ok = function () {

		eventServiceAPI
			.update($scope.newEvent)
			.then(function() {
				$modalInstance.close();
			})
			.catch(function(data) {
				alert(data.error);
			});

	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

}]);
