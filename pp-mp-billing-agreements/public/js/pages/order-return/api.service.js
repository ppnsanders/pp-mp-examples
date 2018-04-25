'use strict'

angular.module('ppMpBillingAgreements').service('orderReturnModel', function ($http, $cookies) {

	function setup() {
		model.action.onAuthorize = $cookies.getObject('on-authorize-data')
		model.action.onCancel = $cookies.getObject('on-cancel-data')
		model.action.onError = $cookies.getObject('on-error-data')
		model.orderData = $cookies.getObject('order-data')
		if(model.action.onAuthorize === 'undefined') {
			if(model.action.onCancel === 'undefined') {
				if(model.action.onError === 'undefined') {
					console.log('nothing is defined.. weird..')
				} else {
					$('onErrorData').show()
				}
			} else {
				$('#onCancelData').show()
			}
		} else {
			$('#onAuthorizeData').show()
			$('#executeBillingAgreement').show()
		}
	}

	function executeBillingAgreement() {
		$('#onAuthorizeData').hide('slide')
		$('#executeBillingAgreementButton').hide('slide')
		$('#setPayOrderButton').hide()
		$('#executeBillingAgreementResponse').show('slide')
		$('#executeBillingAgreementResponseLoading').show()
		const reqUrl = '/api/billing-agreements/' + model.action.onAuthorize.billingToken + '/execute'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
		return $http.post(reqUrl, {}, config).then((response) => {
			model.executeBillingAgreementResponse = response.data
			setTimeout(() => {
				$('#executeBillingAgreementResponseLoading').hide()
				$('#setPayOrderButton').show()
				$('#executeBillingAgreementResponseJson').show()
			}, 1000)
		})
	}

	function setPayOrderRequest() {
		model.payOrderRequest = {}
		model.payOrderRequest.disbursement_mode = "INSTANT"
		model.payOrderRequest.payer = {}
		model.payOrderRequest.payer.payment_method = "paypal"
		model.payOrderRequest.payer.funding_instruments = []
		model.payOrderRequest.payer.funding_instruments[0] = {}
		model.payOrderRequest.payer.funding_instruments[0].billing = {}
		model.payOrderRequest.payer.funding_instruments[0].billing.billing_agreement_id = model.executeBillingAgreementResponse.id
		$('#executeBillingAgreement').hide('slide')
		$('#executeBillingAgreementResponse').hide('slide')
		$('#payOrderRequestFields').show('slide')
		$('#payOrderRequestObject').show('slide')
	}

	function payOrder() {
		$('#payOrderRequestFields').hide('slide')
		$('#payOrderButton').hide('slide')
		$('#payResponseObject').show('slide')
		$('#payOrderResponseJson').hide()
		$('#payOrderResponseLoading').show()
		const reqUrl = '/api/orders/' + model.orderData.id + '/pay'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
		return $http.post(reqUrl, model.payOrderRequest, config).then((response) => {
			model.payOrderResponse = response.data
			setTimeout(() => {
				$('#payOrderResponseLoading').hide()
				$('#payOrderResponseJson').show()
			}, 1000)
		})
	}

	let model = {
		action: {},
		orderData: {},
		executeBillingAgreementResponse: {},
		payOrderRequest: {},
		payOrderResponse: {},
		setup: (model) => {
			return setup(model)
		},
		setPayOrderRequest: (model) => {
			return setPayOrderRequest(model)
		},
		payOrder: (model) => {
			return payOrder(model)
		},
		executeBillingAgreement: (model) => {
			return executeBillingAgreement(model)
		}
	}

	return model
})