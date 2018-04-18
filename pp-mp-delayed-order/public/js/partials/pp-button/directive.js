'use strict'

angular.module('ppMpOrder').directive('ppButton', [ () => {
	return {
		restrict: 'E',
		scope: {
			orderid: '@'
		},
		controller: ['$scope', '$cookies', '$location', ($scope, $cookies, $location) => {
			$scope.env = 'sandbox'
			$scope.commit = false
			$scope.style = {
					layout: 'vertical',
			        color: 'blue',
			        size: 'large',
			        shape: 'rect'
			}
			$scope.funding = {
				allowed: [ paypal.FUNDING.CARD ],
				disallowed: [ paypal.FUNDING.CREDIT ]
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