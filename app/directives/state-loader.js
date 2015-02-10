angular.module('eventListingApp')
	.directive('stateLoader', function stateLoader() {
		return {
			restrict: 'A',
			scope: {},

			link: function (scope, element) {
				scope.$on('$stateChangeStart', function (toState) {
					//if (element.parents('[ui-view]').length === toState.name.split('.').length - 1) {
						element.addClass('loading-state');
					//}
				});

				scope.$on('$stateChangeSuccess', function () {
					element.removeClass('loading-state');
				});

                console.log("hi")
			}
		};
	});