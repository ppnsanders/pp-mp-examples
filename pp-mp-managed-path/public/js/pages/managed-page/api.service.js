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
		$('#managedFields').hide('slide')
		$('#createAccountButton').hide('slide')
		$('#managedResponse').show('slide')
		$('#managedResponseLoading').show()
		const reqUrl = '/api/merchant-accounts'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
		return $http.post(reqUrl, model.managedRequest, config).then((response) => {
			model.managedResponse = response.data
			setTimeout(() => {
				$('#managedResponseLoading').hide()
				$('#createPayPalAccountButton').show()
				$('#managedResponseJson').show()
			}, 500)
		})
	}

	let model = {
		partner: {},
		managedRequest: {},
		managedResponse: {},
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
		}
	}

	return model
})