eventListingApp.controller('eventListingCtrl', ['$scope', '$modal', 'events', 'eventServiceAPI', function($scope, $modal, events, eventServiceAPI) {

	$scope.events = events.data;
	$scope.error = events.error;

	$scope.add = function () {

		var modalInstance = $modal.open({
			templateUrl: 'partials/add-event.html',
			controller: 'addEventCtrl',
			resolve: {
				events: function () {
					return $scope.events;
				}
			}
		});

		// When add modal closes... update this view.
		modalInstance
			.result
			.then(function (event) {
				return eventServiceAPI.all();
			})
			.then(function (data){
				$scope.events = data;
				$scope.$apply();
			})
			.catch(function(data) {
				alert(data.error);
				$scope.error = data.error;
				$scope.$apply();
			});

	};

	$scope.edit = function(event) {

		$modal.open({
			templateUrl: 'partials/edit-event.html',
			controller: 'editEventCtrl',
			resolve: {
				event: function () {
					return event;
				}
			}
		});
	};

	$scope.remove = function(event) {
		var isConfirmed = confirm("Are you sure you want to delete this event?");

		if (isConfirmed) {

			eventServiceAPI
				.remove(event)
				.then(function() {
					$scope.events = $scope.events.filter(function(ev) {
						return ev.id !== event.id
					});
				})
				.catch(function(data) {
					alert(data.error);
				})

		}
	}

}]);
