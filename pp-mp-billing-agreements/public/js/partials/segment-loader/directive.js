'use strict'

angular.module('ppMpBillingAgreements').directive('segmentLoader', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {

		}],
		templateUrl: '/js/partials/segment-loader/template.html'
	}
}])