eventListingApp.controller('editEventCtrl', ['$scope', '$modalInstance', 'event', 'eventServiceAPI', function($scope, $modalInstance, event, eventServiceAPI) {

	$scope.event = event;

	$scope.ok = function () {

		eventServiceAPI
			.update($scope.event)
			.then(function() {
				$modalInstance.close();
			})
			.catch(function(error) {
				alert(error);
			});


	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};

}]);
