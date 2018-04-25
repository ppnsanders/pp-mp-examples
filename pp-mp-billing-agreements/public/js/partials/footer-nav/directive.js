'use strict'

angular.module('ppMpBillingAgreements').directive('footerNav', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {
		}],
		templateUrl: '/js/partials/footer-nav/template.html'
	}
}])