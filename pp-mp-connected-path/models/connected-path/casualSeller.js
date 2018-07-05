'use strict'

const paypalConfig = ppConfig()
const faker = require('faker')


module.exports = function ConnectedPathSellerModel() {
    let newSeller = {}
    	//requested_capabilities
    	newSeller.requested_capabilities = []
    	newSeller.requested_capabilities[0] = {}
    	newSeller.requested_capabilities[0].capability = "API_INTEGRATION"
    	newSeller.requested_capabilities[0].api_integration_preference = {}
    	newSeller.requested_capabilities[0].api_integration_preference.partner_id = paypalConfig.payerId
    	newSeller.requested_capabilities[0].api_integration_preference.rest_api_integration = {}
    	newSeller.requested_capabilities[0].api_integration_preference.rest_api_integration.integration_method = "PAYPAL"
    	newSeller.requested_capabilities[0].api_integration_preference.rest_api_integration.integration_type = "THIRD_PARTY"
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details = {}
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details.partner_client_id = paypalConfig.client_id
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list = []
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[0] = "PAYMENT"
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[1] = "REFUND"
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[2] = "PARTNER_FEE"
    	newSeller.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[3] = "DELAY_FUNDS_DISBURSEMENT"
    	//web_experience_preference
    	newSeller.web_experience_preference = {}
    	newSeller.web_experience_preference.partner_logo_url = faker.image.imageUrl(200, 200, 'technics', true)
    	newSeller.web_experience_preference.return_url = 'http://localhost:8000/referral-return'
    	newSeller.web_experience_preference.action_renewal_url = 'http://localhost:8000/referral-return'
        newSeller.web_experience_preference.use_mini_browser = true
    	//collected_consents
    	newSeller.collected_consents = []
    	newSeller.collected_consents[0] = {}
    	newSeller.collected_consents[0].type = "SHARE_DATA_CONSENT"
    	newSeller.collected_consents[0].granted = true
    	//products
    	newSeller.products = []
    	newSeller.products[0] = "EXPRESS_CHECKOUT"
    	//customer_data
    	newSeller.customer_data = {}
    	newSeller.customer_data.preferred_language_code = "en_US"
    	newSeller.customer_data.primary_currency_code = "USD"
    	//customer_data.partner_specific_identifiers
    	newSeller.customer_data.partner_specific_identifiers = []
    	newSeller.customer_data.partner_specific_identifiers[0] = {}
    	newSeller.customer_data.partner_specific_identifiers[0].type = "TRACKING_ID"
    	newSeller.customer_data.partner_specific_identifiers[0].value = faker.random.uuid()
    	//customer_data.person_details
    	newSeller.customer_data.person_details = {}
    	newSeller.customer_data.person_details.email_address = faker.internet.email()
    	newSeller.customer_data.person_details.date_of_birth = {}
    	newSeller.customer_data.person_details.date_of_birth.event_type = "BIRTH"
    	newSeller.customer_data.person_details.date_of_birth.event_date = "1986-2-3T23:59:59.999Z"
    	newSeller.customer_data.person_details.nationality_country_code = "US"
    	newSeller.customer_data.person_details.name = {}
    	newSeller.customer_data.person_details.name.given_name = faker.name.firstName()
    	newSeller.customer_data.person_details.name.surname = faker.name.lastName()

    return newSeller
}
