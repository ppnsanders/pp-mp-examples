'use strict'

angular.module('ppMpOrder').service('orderReturnModel', function ($http, $cookies) {

	function setup() {
		model.action.onAuthorize = $cookies.getObject('on-authorize-data')
		model.action.onCancel = $cookies.getObject('on-cancel-data')
		model.action.onError = $cookies.getObject('on-error-data')
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
		}
	}

	function setPayOrderRequest() {
		model.payOrderRequest = {}
		model.payOrderRequest.disbursement_mode = "INSTANT"
		$('#onAuthorizeData').hide('slide')
		$('#payOrderRequestFields').show('slide')
		$('#payOrderRequestObject').show('slide')
	}

	function payOrder() {
		$('#payOrderRequestFields').hide('slide')
		$('#payOrderButton').hide('slide')
		$('#payResponseObject').show('slide')
		$('#payOrderResponseJson').hide()
		$('#payOrderResponseLoading').show()
		const reqUrl = '/api/orders/' + model.action.onAuthorize.orderID + '/pay'
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
		}
	}

	return model
})