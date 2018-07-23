'use strict'

angular.module('ppMpConnectedPath').directive('baReturn', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'baReturnModel', '$location', ($scope, baReturnModel, $location) => {
			$scope.model = baReturnModel
			$scope.model.setup()
			$scope.model.params = $location.search()
		}],
		templateUrl: '/js/pages/ba-return/template.html'
	}
}])