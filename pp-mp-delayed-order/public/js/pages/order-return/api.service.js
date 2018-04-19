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
		model.payOrderRequest.disbursement_mode = "DELAYED"
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
				$('#createDisbursementButton').show()
			}, 1000)
		})
	}

	function getOrderDetails() {
		const reqUrl = '/api/orders/' + model.payOrderResponse.order_id
		return $http.get(reqUrl).then((response) => {
			model.orderDetails = response.data
		})
	}

	function setDisbursementRequest() {
		$('#payOrderRequestObject').hide('slide')
		$('#payResponseObject').hide('slide')
		model.getOrderDetails().then((response) => {
			model.disbursementRequest.reference_type = "TRANSACTION_ID"
			if(typeof model.orderDetails.purchase_units[0].payment_summary.captures == 'undefined') {
				$('#iamslow').show()
				setTimeout(() => {
					model.setDisbursementRequest()
				}, 10000)	
			} else {
				$('#iamslow').hide()
				model.disbursementRequest.reference_id = model.orderDetails.purchase_units[0].payment_summary.captures[0].id
				$('#disbursementFields').show()
				$('#disbursementRequestObject').show()
			}
		})
	}

	function disburse() {
		$('#disbursementFields').hide('slide')
		$('#disburseButton').hide('slide')
		$('#disbursementResponseObject').show('slide')
		$('#disbursementResponseJson').hide()
		$('#disbursementResponseLoading').show()
		const reqUrl = '/api/orders/disburse/' + model.disbursementRequest.reference_id
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
        return $http.post(reqUrl, model.disbursementRequest, config).then((response) => {
			model.disbursementResponse = response.data
			if(typeof model.disbursementResponse.name !== 'undefined') {
				if(model.disbursementResponse.name === 'INTERNAL_ERROR') {
					setTimeout(() => {
						$('#disbursementScopeMessage').show()
					}, 1000)
				}
			}
			setTimeout(() => {
				$('#disbursementResponseLoading').hide()
				$('#disbursementResponseJson').show()
			}, 1000)
		})
	}

	let model = {
		action: {},
		payOrderRequest: {},
		payOrderResponse: {},
		orderDetails: {},
		disbursementRequest: {},
		setup: (model) => {
			return setup(model)
		},
		setPayOrderRequest: (model) => {
			return setPayOrderRequest(model)
		},
		payOrder: (model) => {
			return payOrder(model)
		},
		getOrderDetails: (model) => {
			return getOrderDetails(model)
		},
		setDisbursementRequest: (model) => {
			return setDisbursementRequest(model)
		},
		disburse: (model) => {
			return disburse(model)
		}
	}

	return model
})