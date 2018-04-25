'use strict'

angular.module('ppMpBillingAgreements').directive('orderPage', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'orderServiceModel', ($scope, orderServiceModel) => {
			$scope.model = orderServiceModel
			$scope.model.setup()
		}],
		templateUrl: '/js/pages/order-page/template.html'
	}
}])