'use strict'

angular.module('ppMpConnectedPath').service('baOnboardingModel', function ($http, $cookies) {

	function setup() {
		model.getPartnerConfig()
		model.getBaReferralRequest()
	}

	function getBaReferralRequest() {
		$('#BaLoading').show()
		$('#BaRequestFields').hide()
		$http.get('/api/ba/newMerchant').then((response) => {
			model.referralRequest = response.data
			setTimeout(() => {
				$('#BaRequestFields').show()
				$('#BaLoading').hide()
			},2000)
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

	function createBaReferral() {
		$('#referralFields').hide('slide')
		$('#createReferralButton').hide('slide')
		$('#referralResponse').show('slide')
		$('#referralResponseLoading').show()
		const tmpMerchantConf = {}
			  tmpMerchantConf.email = model.referralRequest.customer_data.person_details.email_address
			  tmpMerchantConf.payerId = ""
			  tmpMerchantConf.brandName = model.referralRequest.customer_data.business_details.names[0].name
			  tmpMerchantConf.phone = {}
			  tmpMerchantConf.phone.countryCode = model.referralRequest.customer_data.business_details.phone_contacts[0].phone_number_details.country_code
			  tmpMerchantConf.phone.number = model.referralRequest.customer_data.business_details.phone_contacts[0].phone_number_details.national_number
			  tmpMerchantConf.client_id = ""
			  $cookies.remove('tmp-merchant-conf')
			  $cookies.putObject('tmp-merchant-conf', tmpMerchantConf)
		const reqUrl = '/api/partner-referrals'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
		return $http.post(reqUrl, model.referralRequest, config).then((response) => {
			model.referralResponse = response.data
			setTimeout(() => {
				$('#referralResponseLoading').hide()
				$('#createPayPalAccountButton').show()
				$('#referralResponseJson').show()
			}, 500)
		})
	}


	let model = {
		partner: {},
		referralRequest: {},
		sellerReferralRequest: {},
		referralResponse: {},
		setup: (model) => {
			return setup(model)
		},
		getBaReferralRequest: (model) => {
			return getBaReferralRequest(model)
		},
		getPartnerConfig: (model) => {
			return getPartnerConfig(model)
		},
		createBaReferral: (model) => {
			return createBaReferral(model)
		}
	}

	return model
})