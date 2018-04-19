'use strict'

angular.module('ppMpOrder').directive('homePage', [ ($cookies) => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', '$cookies', '$location', '$http', ($scope, $cookies, $location, $http) => {
			$scope.merchantConf = $cookies.getObject('merchant-conf')
			$scope.merchant = {}
			$scope.merchant.email = ""
			$scope.merchant.payerId = ""
			$scope.merchant.brandName = ""
			$scope.merchant.phone = {}
			$scope.merchant.phone.countryCode = ""
			$scope.merchant.phone.number = ""
			$scope.merchant.client_id = ""
			$scope.setMerchant = () => {
				$cookies.remove('merchant-conf')
				$cookies.putObject('merchant-conf', $scope.merchant)
				$scope.merchantConf = $cookies.getObject('merchant-conf')
				$('#merchantProfile').hide()
				$location.path('/order/create')
			}
			$scope.defaultMerchant = () => {
				$('#merchantProfile').hide('slide')
				$location.path('/order/create')
			}
			$scope.removeDefaultButton = () => {
				$('#defaultMerchantButton').hide('slide')
			}
			if(typeof $scope.merchantConf === 'undefined') {
				$('#defaultMerchantButton').hide()
			} else {
				$scope.merchant.email = $scope.merchantConf.email
				$scope.merchant.payerId = $scope.merchantConf.payerId
				$scope.merchant.brandName = $scope.merchantConf.brandName
				$scope.merchant.phone = {}
				$scope.merchant.phone.countryCode = $scope.merchantConf.phone.countryCode
				$scope.merchant.phone.number = $scope.merchantConf.phone.number
				$scope.merchant.client_id = $scope.merchantConf.client_id
				$('#defaultMerchantButton').show()
			}
			$scope.getPartnerConfig = () => {
				return $http.get('/api/config').then((response) => {
					$cookies.putObject('partner-conf', response.data)
				})
			}
			$scope.getPartnerConfig()	
		}],
		templateUrl: '/js/pages/home-page/template.html'
	}
}])