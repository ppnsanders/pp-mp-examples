'use strict'

angular.module('ppMpManagedPath').directive('homePage', [ ($cookies) => {
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
				$location.path('/managed-page/')
			}
			$scope.defaultMerchant = () => {
				$('#defaultMerchantButton').addClass('loading')
				$scope.merchant.email = "natepartner@sandersx.com"
				$scope.merchant.payerId = "RHYDUX7DAYVZW"
				$scope.merchant.brandName = "GithubExamples"
				$scope.merchant.phone.countryCode = "001"
				$scope.merchant.phone.number = "8882211161"
				$scope.merchant.client_id = "ATbvgnf_eArbjPoHBcLggAccplpyElBbJJTAfc9cxQzA-9u6dDubtUnolueBX8UvoofIvY7vCsjGXPSF"
				setTimeout(() => {
					$('#defaultMerchantButton').hide()
				}, 500)	
			}
			if(typeof $scope.merchantConf === 'undefined') {
				$('#merchantProfile').show()
			} else {
				$location.path('/managed-page')
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