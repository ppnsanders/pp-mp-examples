'use strict'

angular.module('ppMpConnectedPath').service('baReturnModel', function ($http, $cookies) {

	function setup() {
		model.getPartnerConfig()
		model.merchantConf = $cookies.getObject('tmp-merchant-conf')
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

	function executeBillingAgreement() {
		$('#executeBAButton').hide('slide')
		$('#executeBAResponseObject').show('slide')
		$('#executeBAResponseLoading').show()
		const reqUrl = '/api/ba/execute/' + model.params.ba_token
		return $http.get(reqUrl).then((response) => {
			if(response.error) {
				console.log('Error: ', response)
			} else {
				model.executeBAResponse = response.data
				setTimeout(() => {
						$('#executeBAResponseLoading').hide()
						$('#executeBAResponseJson').show('slide')
				}, 1000)
			}
		})
	}

	function getMerchantAccountStatus() {
		$('#returnParams').hide('slide')
		$('#getMerchantAccountStatusButton').hide('slide')
		$('#merchantStatusResponseObject').show('slide')
		$('#merchantStatusResponseLoading').show()
		const reqUrl = '/api/status/' + model.executeBAResponse.payer.payer_info.payer_id
		return $http.get(reqUrl).then((response) => {
				if(response.error) {
					console.log('Error: ', response)
				} else {
					model.merchantStatusResponse = response.data
					$cookies.remove('tmp-merchant-conf')
					setTimeout(() => {
						$('#merchantStatusResponseLoading').hide()
						$('#merchantStatusResponseJson').show('slide')
					}, 1000)
				}
			})
	}

	function saveAsDefaultMerchant() {
		$('#saveAsDefaultMerchantButton').addClass('loading')
		model.merchantConf.payerId = model.merchantStatusResponse.merchant_id
		model.merchantConf.client_id = model.merchantStatusResponse.oauth_integrations[0].oauth_third_party[0].merchant_client_id
		$cookies.putObject('merchant-conf', model.merchantConf)
		setTimeout(() => {
			$('#saveAsDefaultMerchantButton').removeClass('loading')
			$('#saveAsDefaultMerchantButton').hide()
			$('#savedAsDefaultMessage').show()
		}, 500)
	}

	let model = {
		partner: {},
		merchantConf: {},
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
		},
		saveAsDefaultMerchant: (model) => {
			return saveAsDefaultMerchant(model)
		},
		executeBillingAgreement: (model) => {
			return executeBillingAgreement(model)
		}
	}

	return model
})