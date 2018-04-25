'use strict'

angular.module('ppMpBillingAgreements').directive('orderReturn', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'orderReturnModel', ($scope, orderReturnModel) => {
			$scope.model = orderReturnModel
			$scope.model.setup()

		}],
		templateUrl: '/js/pages/order-return/template.html'
	}
}])