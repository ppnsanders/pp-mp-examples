'use strict'

angular.module('ppMpOrder').service('orderServiceModel', function ($http, $cookies) {

	function setup() {
		model.merchant = $cookies.getObject('merchant-conf')
		model.order = {}
		model.order.purchase_units = []
		model.order.purchase_units[0] = {}
		model.getPartnerConfig()
		model.setOrderObject()
		model.setAmountObject()
		$('orderView').show()
	}

	function getPartnerConfig() {
		return $http.get('/api/config').then((response) => {
					model.partnerClientId = response.client_id
					//partner_fee_details
			        model.order.purchase_units[0].partner_fee_details = {}
			        model.order.purchase_units[0].partner_fee_details.amount = {}
			        model.order.purchase_units[0].partner_fee_details.amount.currency = 'USD'
			        	let partnerFee = (Number(model.order.purchase_units[0].amount.details.subtotal) * model.partnerFeePercentage)
	    			model.order.purchase_units[0].partner_fee_details.amount.value = Number.parseFloat(partnerFee).toFixed(2)
			        model.order.purchase_units[0].partner_fee_details.receiver = {}
			        model.order.purchase_units[0].partner_fee_details.receiver.email = response.data.email
			        model.order.purchase_units[0].partner_fee_details.receiver.merchant_id = response.data.payerId
			        model.order.purchase_units[0].partner_fee_details.receiver.payee_display_metadata = {}
			        model.order.purchase_units[0].partner_fee_details.receiver.payee_display_metadata.email = response.data.email
			        model.order.purchase_units[0].partner_fee_details.receiver.payee_display_metadata.display_phone = {}
			        model.order.purchase_units[0].partner_fee_details.receiver.payee_display_metadata.display_phone.country_code = '001'
			        model.order.purchase_units[0].partner_fee_details.receiver.payee_display_metadata.display_phone.number = '8882211161'
			        model.order.purchase_units[0].partner_fee_details.receiver.payee_display_metadata.brand_name = response.data.brandName
				})
	}

	function setOrderObject() {
		model.order.purchase_units[0].reference_id = faker.random.uuid()
	    model.order.purchase_units[0].description = 'Default Level 1 Order'
	    //items
	    model.order.purchase_units[0].items = []
	    model.order.purchase_units[0].items[0] = {}
	    model.order.purchase_units[0].items[0].name = faker.commerce.product()
	    model.order.purchase_units[0].items[0].sku = 'SKU-' + faker.random.uuid()
	    model.order.purchase_units[0].items[0].price = Number.parseFloat(faker.finance.amount(1,50,2)).toFixed(2)
	    model.order.purchase_units[0].items[0].currency = 'USD'
	    model.order.purchase_units[0].items[0].quantity = 2
	    model.order.purchase_units[0].items[0].category = 'PHYSICAL'
	    model.order.purchase_units[0].items[1] = {}
	    model.order.purchase_units[0].items[1].name = faker.commerce.product()
	    model.order.purchase_units[0].items[1].sku = 'SKU-' + faker.random.uuid()
	    model.order.purchase_units[0].items[1].price = Number.parseFloat(faker.finance.amount(1,50,2)).toFixed(2)
	    model.order.purchase_units[0].items[1].currency = 'USD'
	    model.order.purchase_units[0].items[1].quantity = 2
	    model.order.purchase_units[0].items[1].category = 'PHYSICAL'
	    //payee
	    model.order.purchase_units[0].payee = {}
	    model.order.purchase_units[0].payee.merchant_id = model.merchant.payerId
	    model.order.purchase_units[0].payee.email = model.merchant.email
	    model.order.purchase_units[0].payee.payee_display_metadata = {}
	    model.order.purchase_units[0].payee.payee_display_metadata.email = model.merchant.customerServiceEmail
	    model.order.purchase_units[0].payee.payee_display_metadata.brand_name = model.merchant.brandName
	    model.order.purchase_units[0].payee.payee_display_metadata.phone = {}
	    model.order.purchase_units[0].payee.payee_display_metadata.phone.country_code = model.merchant.phone.countryCode
	    model.order.purchase_units[0].payee.payee_display_metadata.phone.number = model.merchant.phone.number
	    //shipping_address
	    model.order.purchase_units[0].shipping_address = {}
	    model.order.purchase_units[0].shipping_address.recipient_name = faker.name.findName()
	    model.order.purchase_units[0].shipping_address.line1 = faker.address.streetAddress()
	    model.order.purchase_units[0].shipping_address.line2 = 'Apartment Number ' + faker.random.number()
	    model.order.purchase_units[0].shipping_address.city = 'Gilbert'
	    model.order.purchase_units[0].shipping_address.country_code = 'US'
	    model.order.purchase_units[0].shipping_address.postal_code = '85298'
	    model.order.purchase_units[0].shipping_address.state = 'AZ'
	    model.order.purchase_units[0].shipping_address.phone = '0018882211161'
	    //shipping_method
	    model.order.purchase_units[0].shipping_method = 'United Postal Service'
	    //payment_linked_group
	    model.order.purchase_units[0].payment_linked_group = 1
	    //custom
	    model.order.purchase_units[0].custom = 'MyCustomVar'
	    //invoice_number
	    model.order.purchase_units[0].invoice_number = 'INV-' + faker.random.uuid()
	    //payment_descriptor
	    model.order.purchase_units[0].payment_descriptor = 'Payment Nate Shop'
	    //application_context
	    model.order.application_context = {}
	    model.order.application_context.brand_name = model.merchant.brandName
	    model.order.application_context.locale = 'en-US'
	    model.order.application_context.landing_page = 'Login'
	    model.order.application_context.shipping_preferences = 'NO_SHIPPING'
	    model.order.application_context.user_action = 'continue'
	    //metadata
	    model.order.metadata = {}
	    //metadata.postback_data
	    model.order.metadata.postback_data = []
	    model.order.metadata.postback_data[0] = {}
	    model.order.metadata.postback_data[0].name = 'metaOneName'
	    model.order.metadata.postback_data[0].value = 'metaOneValue'
	    //metadata.supplementary_data
	    model.order.metadata.supplementary_data = []
	    model.order.metadata.supplementary_data[0] = {}
	    model.order.metadata.supplementary_data[0].name = 'supplementaryOneName'
	    model.order.metadata.supplementary_data[0].value = 'supplementaryOneValue'
	    //redirect URLs
	    model.order.redirect_urls = {}
	    model.order.redirect_urls.return_url = 'http://localhost:8000/return'
	    model.order.redirect_urls.cancel_url = 'http://localhost:8000/cancel'
	}

	function setAmountObject() {
		//amount object
	    model.order.purchase_units[0].amount = {}
	    model.order.purchase_units[0].amount.currency = 'USD'
	    model.order.purchase_units[0].amount.details = {}
	      	let subtotalAmt = (Number(model.order.purchase_units[0].items[0].price) * Number(model.order.purchase_units[0].items[0].quantity)) + (Number(model.order.purchase_units[0].items[1].price) * Number(model.order.purchase_units[0].items[1].quantity))
	    model.order.purchase_units[0].amount.details.subtotal = Number.parseFloat(subtotalAmt).toFixed(2)
	    model.order.purchase_units[0].amount.details.shipping = Number.parseFloat(faker.finance.amount(1,20,2)).toFixed(2)
	    model.order.purchase_units[0].amount.details.tax = Number.parseFloat(faker.finance.amount(1,10,2)).toFixed(2)
	      	let totalAmount = Number(model.order.purchase_units[0].amount.details.subtotal) + Number(model.order.purchase_units[0].amount.details.shipping) + Number(model.order.purchase_units[0].amount.details.tax)
	    model.order.purchase_units[0].amount.total = Number.parseFloat(totalAmount).toFixed(2)
	}

	function updateAmountObject() {
	      	let subtotalAmt = (Number(model.order.purchase_units[0].items[0].price) * Number(model.order.purchase_units[0].items[0].quantity)) + (Number(model.order.purchase_units[0].items[1].price) * Number(model.order.purchase_units[0].items[1].quantity))
	    model.order.purchase_units[0].amount.details.subtotal = Number.parseFloat(subtotalAmt).toFixed(2)
	      	let totalAmount = Number(model.order.purchase_units[0].amount.details.subtotal) + Number(model.order.purchase_units[0].amount.details.shipping) + Number(model.order.purchase_units[0].amount.details.tax)
	    model.order.purchase_units[0].amount.total = Number.parseFloat(totalAmount).toFixed(2)
	      	let partnerFee = (Number(model.order.purchase_units[0].amount.details.subtotal) * model.partnerFeePercentage)
	    model.order.purchase_units[0].partner_fee_details.amount.value = Number.parseFloat(partnerFee).toFixed(2)
	}

	function createOrder() {
		$('#orderFields').hide('slide')
		$('#createOrderButton').hide('slide')
		$('#orderResponseObject').show('slide')
		$('#orderResponseJson').hide()
		$('#orderResponseLoading').show()
		const reqUrl = '/api/orders/create'
		const config = {
            'xsrfHeaderName': 'X-CSRF-TOKEN',
            'xsrfCookieName': 'XSRF-TOKEN'
        }
		return $http.post(reqUrl, model.order, config).then((response) => {
			model.orderResponse = response.data
			setTimeout(() => {
				$('#orderResponseLoading').hide()
				$('#showPayPalButton').show()
				$('#orderResponseJson').show()
			}, 500)
		})
	}

	function showPayPalButton() {
		$('#showPayPalButton').hide('slide')
		$('#orderRequestObject').hide('slide')
		$('#orderPayPalButton').show('slide')
	}

	let model = {
		partnerFeePercentage: 0.10, //10% Partner Fee
		merchant: {},
		order: {},
		orderResponse: {},
		partnerClientId: "",
		setup: (model) => {
			return setup(model)
		},
		getPartnerConfig: (model) => {
			return getPartnerConfig(model)
		},
		setOrderObject: (model) => {
			return setOrderObject(model)
		},
		setAmountObject: (model) => {
			return setAmountObject(model)
		},
		updateAmountObject: (model) => {
			return updateAmountObject(model)
		},
		createOrder: (model) => {
			return createOrder(model)
		},
		showPayPalButton: (model) => {
			return showPayPalButton(model)
		}
	}

	return model
})