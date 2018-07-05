'use strict'

angular.module('ppMpConnectedPath').directive('casualSeller', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'referralPageModel', ($scope, referralPageModel) => {
			$scope.model = referralPageModel
			$scope.model.setup()	
		}],
		templateUrl: '/js/pages/casual-seller/template.html'
	}
}])