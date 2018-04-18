'use strict'

angular.module('ppMpConnectedPath').directive('footerNav', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {
		}],
		templateUrl: '/js/partials/footer-nav/template.html'
	}
}])