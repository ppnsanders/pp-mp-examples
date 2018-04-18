'use strict'

angular.module('ppMpConnectedPath').directive('segmentLoader', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {

		}],
		templateUrl: '/js/partials/segment-loader/template.html'
	}
}])