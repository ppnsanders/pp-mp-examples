'use strict'

angular.module('ppMpConnectedPath').service('referralReturnModel', function ($http, $cookies) {

	function setup() {
		model.getPartnerConfig()
		$('#returnParams').show()
	}

	function getPartnerConfig() {
		const partnerConfig = $cookies.getObject('partner-conf')
		if(typeof partnerConfig == 'undefined') {
			return $http.get('/api/config').then((response) => {
					$cookies.putObject('partner-conf', response.data)
					model.partner = response.data
				})
		} else {
			model.partner = partnerConfig
		}
	}

	function getMerchantAccountStatus() {
		$('#getMerchantAccountStatusButton').hide('slide')
		$('#merchantStatusResponseObject').show('slide')
		$('#merchantStatusResponseLoading').show()
		const reqUrl = '/api/status/' + model.params.merchantIdInPayPal
		return $http.get(reqUrl).then((response) => {
				if(response.error) {
					console.log('Error: ', response)
				} else {
					model.merchantStatusResponse = response.data
					setTimeout(() => {
						$('#merchantStatusResponseLoading').hide()
						$('#merchantStatusResponseJson').show('slide')
					})
				}
			})
	}

	let model = {
		partner: {},
		params: {},
		merchantStatusResponse: {},
		setup: (model) => {
			return setup(model)
		},
		getPartnerConfig: (model) => {
			return getPartnerConfig(model)
		},
		getMerchantAccountStatus: (model) => {
			return getMerchantAccountStatus(model)
		}
	}

	return model
})