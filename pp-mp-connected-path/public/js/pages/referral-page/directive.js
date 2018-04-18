'use strict'

angular.module('ppMpConnectedPath').directive('referralPage', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'referralPageModel', ($scope, referralPageModel) => {
			$scope.model = referralPageModel
			$scope.model.setup()
		}],
		templateUrl: '/js/pages/referral-page/template.html'
	}
}])