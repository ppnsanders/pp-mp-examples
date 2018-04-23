'use strict'

angular.module('ppMpManagedPath').service('managedPageModel', function ($http, $cookies) {

	function setup() {
		model.getPartnerConfig()
		model.getManagedRequest()
	}

	function getManagedRequest() {
		$http.get('/api/newMerchant').then((response) => {
			model.managedRequest = response.data
		})
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

	function createAccount() {
		$('#saveAsDefaultMerchantButton').hide()
		$('#managedFields').hide('slide')
		$('#createAccountButton').hide('slide')
		$('#managedResponse').show('slide')
		$('#managedResponseLoading').show()
		model.tmpMerchantConf.email = model.managedRequest.owner_info.email
		model.tmpMerchantConf.payerId = ""
		model.tmpMerchantConf.brandName = model.managedRequest.business_info.names[0].name
		model.tmpMerchantConf.phone = {}
		model.tmpMerchantConf.phone.countryCode = model.managedRequest.owner_info.phones[0].country_code
		model.tmpMerchantConf.phone.number = model.managedRequest.owner_info.phones[0].national_number
		$cookies.remove('tmp-merchant-conf')
		$cookies.putObject('tmp-merchant-conf', model.tmpMerchantConf)
		const reqUrl = '/api/merchant-accounts'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
		return $http.post(reqUrl, model.managedRequest, config).then((response) => {
			model.managedResponse = response.data
			model.tmpMerchantConf.payerId = model.managedResponse.payer_id
			setTimeout(() => {
				$('#managedResponseLoading').hide()
				$('#saveAsDefaultMerchantButton').show()
				$('#managedResponseJson').show()
			}, 500)
		})
	}

	function saveAsDefaultMerchant() {
		$('#saveAsDefaultMerchantButton').addClass('loading')
		$cookies.remove('merchant-conf')
		$cookies.putObject('merchant-conf', model.tmpMerchantConf)
		setTimeout(() => {
			$('#saveAsDefaultMerchantButton').removeClass('loading')
			$('#saveAsDefaultMerchantButton').hide()
			$('#savedAsDefaultMessage').show()
		}, 500)
	}

	let model = {
		partner: {},
		managedRequest: {},
		managedResponse: {},
		tmpMerchantConf: {},
		setup: (model) => {
			return setup(model)
		},
		getManagedRequest: (model) => {
			return getManagedRequest(model)
		},
		getPartnerConfig: (model) => {
			return getPartnerConfig(model)
		},
		createAccount: (model) => {
			return createAccount(model)
		},
		saveAsDefaultMerchant: (model) => {
			return saveAsDefaultMerchant(model)
		}
	}

	return model
})