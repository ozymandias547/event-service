describe('The eventListingCtrl controller.', function() {

	var $rootscope,
		$scope,
		controller,
		events;

	beforeEach(function() {

		module('eventListingApp')

	});

	describe("Initialization", function() {

		describe("When proper event data comes in", function () {

			beforeEach(function () {

				inject(function ($injector) {

					events = {
						data: "hi",
						error: null
					};

					$rootscope = $injector.get('$rootScope');
					$scope = $rootscope.$new();
					controller = $injector.get('$controller')('eventListingCtrl', {
						$scope: $scope,
						events: events,
						modal: $injector.get('$modal')
					});


				})
			});

			it("Should put the events on $scope.events", function () {
				expect($scope.events).toBeDefined();
			})

			it("should have a null $scope.error", function () {
				expect($scope.error).toBeNull();
			});

		});

		describe("When the event data has an error", function () {

			beforeEach(function () {

				inject(function ($injector) {

					events = {
						data: null,
						error: "there has been an error!"
					};

					$rootscope = $injector.get('$rootScope');
					$scope = $rootscope.$new();
					controller = $injector.get('$controller')('eventListingCtrl', {
						$scope: $scope,
						events: events,
						modal: $injector.get('$modal')
					});


				})
			});

			it("should set $scope.events to null.", function () {
				expect($scope.events).toBeNull();
			});

			it("should set $scope.error to the error", function () {
				expect($scope.error).toBeDefined();
			});

		});

	});
});