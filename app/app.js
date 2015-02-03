var eventListingApp = angular.module('eventListingApp', [
	'ui.router',
	'ui.bootstrap',
	'angularMoment',
	'angular.filter'
]);

eventListingApp.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('all-events', {
			url: "/all-events",
			templateUrl: "partials/all-events.html",
			controller: 'eventListingCtrl',
			resolve: {
				events: function(eventServiceAPI){
					return eventServiceAPI.all();
				}
			}
		})
		.state('upcoming-events', {
			url: "/upcoming-events",
			templateUrl: "partials/upcoming-events.html",
			controller: 'eventListingCtrl',
			resolve: {
				events: function(eventServiceAPI){
					return eventServiceAPI.all();
				}
			}
		})
		.state('local-events', {
			url: "/local-events",
			templateUrl: "partials/local-events.html",
			controller: 'eventListingCtrl',
			resolve: {
				events: function(eventServiceAPI){
					return eventServiceAPI.all();
				}
			}
		});

	$urlRouterProvider.otherwise("/all-events");

});

// Global utility helpers
eventListingApp.run([ '$rootScope', '$state', '$stateParams', function ($rootScope, $state, $stateParams) {

	$rootScope.$state = $state;
	$rootScope.$stateParams = $stateParams;

	$rootScope.refreshState = function() {
		$state.go($state.current, {}, {reload: true});
	}

}]);
