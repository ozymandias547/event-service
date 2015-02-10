describe('The eventListingCtrl controller.', function() {

	var $rootscope,
		$scope,
		controller,
		events;

	beforeEach(function() {

		module('eventListingApp');

		inject(function ($injector) {

			events = {
				data: "hi",
				error: null
			};

			$rootscope = $injector.get('$rootScope');
			$scope = new $rootscope.$new();
			controller = $injector.get('$controller')('eventListingCtrl', {
				$scope: $scope,
				events: events,
				modal: $injector.get('$modal')
			});

		})
	});

	it("Should initialize with events on the scope", function() {
		expect($scope.events).toBeDefined();
	});

	it("Should open a new modal when the add button is clicked", function() {
        expect($scope.add).toBeDefined();
    });


});