'use strict'

angular.module('ppMpConnectedPath').directive('referralReturn', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'referralReturnModel', '$location', ($scope, referralReturnModel, $location) => {
			$scope.model = referralReturnModel
			$scope.model.setup()
			$scope.model.params = $location.search()
		}],
		templateUrl: '/js/pages/referral-return/template.html'
	}
}])