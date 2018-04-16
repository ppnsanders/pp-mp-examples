'use strict'

angular.module('ppMpOrder').directive('ppButton', [ () => {
	return {
		restrict: 'E',
		scope: {
			orderid: '@'
		},
		controller: ['$scope', '$cookies', '$location', ($scope, $cookies, $location) => {
			$scope.partner = $cookies.getObject('partner-conf')
			console.log($scope.partner)
			$scope.client = {
				sandbox: $scope.partner.client_id,
				production: $scope.partner.client_id,
			}
			$scope.env = 'sandbox'
			$scope.commit = false
			$scope.style = {
					layout: 'vertical',
			        color: 'blue',
			        size: 'large',
			        shape: 'rect'
			}
			$scope.funding = {
				allowed: [ paypal.FUNDING.CARD, paypal.FUNDING.CREDIT ],
				disallowed: []
			}
			$scope.payment = function () {
				return $scope.orderid
			}
			$scope.onAuthorize = function(data, actions) {
				$cookies.putObject('on-authorize-data', data)
				$location.path('/order/return')
			}
			$scope.onCancel = function(data) {
				$cookies.putObject('on-cancel-data', data)
				$location.path('/order/return')
			}
			$scope.onError = function(data) {
				$cookies.putObject('on-error-data', data)
				$location.path('/order/return')
			}
		}],
		templateUrl: '/js/partials/pp-button/template.html'
	}
}])