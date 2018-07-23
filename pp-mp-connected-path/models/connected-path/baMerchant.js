'use strict'

const paypalConfig = ppConfig()
const faker = require('faker')


module.exports = function ConnectedPathMerchantModel(baResponse) {
    let newBaMerchant = {}
    	//requested_capabilities
    	newBaMerchant.requested_capabilities = []
    	newBaMerchant.requested_capabilities[0] = {}
    	newBaMerchant.requested_capabilities[0].capability = "API_INTEGRATION"
    	newBaMerchant.requested_capabilities[0].api_integration_preference = {}
    	newBaMerchant.requested_capabilities[0].api_integration_preference.partner_id = paypalConfig.payerId
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_api_integration = {}
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_api_integration.integration_method = "PAYPAL"
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_api_integration.integration_type = "THIRD_PARTY"
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details = {}
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.partner_client_id = paypalConfig.client_id
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list = []
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[0] = "PAYMENT"
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[1] = "REFUND"
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[2] = "PARTNER_FEE"
    	newBaMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[3] = "DELAY_FUNDS_DISBURSEMENT"
        newBaMerchant.requested_capabilities[1] = {}
        newBaMerchant.requested_capabilities[1].capability = "BILLING_AGREEMENT"
        newBaMerchant.requested_capabilities[1].billing_agreement = {}
        newBaMerchant.requested_capabilities[1].billing_agreement.billing_experience_preference = {}
        newBaMerchant.requested_capabilities[1].billing_agreement.billing_experience_preference.billing_context_set = false
        newBaMerchant.requested_capabilities[1].billing_agreement.approval_url = baResponse.links[0].href
    	//web_experience_preference
    	newBaMerchant.web_experience_preference = {}
    	newBaMerchant.web_experience_preference.partner_logo_url = faker.image.imageUrl(200, 200, 'technics', true)
    	newBaMerchant.web_experience_preference.return_url = 'http://localhost:8000/referral-return'
    	newBaMerchant.web_experience_preference.action_renewal_url = 'http://localhost:8000/referral-return'
        newBaMerchant.web_experience_preference.use_mini_browser = true
    	//collected_consents
    	newBaMerchant.collected_consents = []
    	newBaMerchant.collected_consents[0] = {}
    	newBaMerchant.collected_consents[0].type = "SHARE_DATA_CONSENT"
    	newBaMerchant.collected_consents[0].granted = true
    	//products
    	newBaMerchant.products = []
    	newBaMerchant.products[0] = "EXPRESS_CHECKOUT"
    	//customer_data
    	newBaMerchant.customer_data = {}
    	newBaMerchant.customer_data.customer_type = "MERCHANT"
    	newBaMerchant.customer_data.preferred_language_code = "en_US"
    	newBaMerchant.customer_data.primary_currency_code = "USD"
    	//customer_data.financial_instrument_data
    	newBaMerchant.customer_data.financial_instrument_data = {}
    	newBaMerchant.customer_data.financial_instrument_data.bank_details = []
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0] = {}
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].nick_name = "BofA Bank Acct"
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].account_number = "123405668293"
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].account_type = "CHECKING"
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].currency_code = "USD"
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers = []
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers[0] = {}
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers[0].type = "ROUTING_NUMBER_1"
    	newBaMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers[0].value = "123456789"
    	//customer_data.partner_specific_identifiers
    	newBaMerchant.customer_data.partner_specific_identifiers = []
    	newBaMerchant.customer_data.partner_specific_identifiers[0] = {}
    	newBaMerchant.customer_data.partner_specific_identifiers[0].type = "TRACKING_ID"
    	newBaMerchant.customer_data.partner_specific_identifiers[0].value = faker.random.uuid()
    	//customer_data.person_details
    	newBaMerchant.customer_data.person_details = {}
    	newBaMerchant.customer_data.person_details.email_address = faker.internet.email()
    	newBaMerchant.customer_data.person_details.date_of_birth = {}
    	newBaMerchant.customer_data.person_details.date_of_birth.event_type = "BIRTH"
    	newBaMerchant.customer_data.person_details.date_of_birth.event_date = "1986-2-3T23:59:59.999Z"
    	newBaMerchant.customer_data.person_details.nationality_country_code = "US"
    	newBaMerchant.customer_data.person_details.name = {}
    	newBaMerchant.customer_data.person_details.name.given_name = faker.name.firstName()
    	newBaMerchant.customer_data.person_details.name.surname = faker.name.lastName()
    	//business_details
    	newBaMerchant.customer_data.business_details = {}
    	newBaMerchant.customer_data.business_details.business_type = "PROPRIETORSHIP"
    	newBaMerchant.customer_data.business_details.category = "1008"
    	newBaMerchant.customer_data.business_details.sub_category = "2076"
    	newBaMerchant.customer_data.business_details.business_description = "Physical goods from the Test Store"
    	//business_details.identity_documents
    	newBaMerchant.customer_data.business_details.identity_documents = []
    	newBaMerchant.customer_data.business_details.identity_documents[0] = {}
    	newBaMerchant.customer_data.business_details.identity_documents[0].type = "TAX_IDENTIFICATION_NUMBER"
    	newBaMerchant.customer_data.business_details.identity_documents[0].value = "ABCDEF34646"
    	newBaMerchant.customer_data.business_details.identity_documents[0].partial_value = false
    	newBaMerchant.customer_data.business_details.identity_documents[0].issuer_country_code = "US"
    	//business_details.names
    	newBaMerchant.customer_data.business_details.names = []
    	newBaMerchant.customer_data.business_details.names[0] = {}
    	newBaMerchant.customer_data.business_details.names[0].type = "LEGAL"
    	newBaMerchant.customer_data.business_details.names[0].name = "Test Store"
    	//business_details.event_dates
    	newBaMerchant.customer_data.business_details.event_dates = []
    	newBaMerchant.customer_data.business_details.event_dates[0] = {}
    	newBaMerchant.customer_data.business_details.event_dates[0].event_type = "ESTABLISHED"
    	newBaMerchant.customer_data.business_details.event_dates[0].event_date = "1999-01-01T19:19:19Z"
    	//business_details.website_urls
    	newBaMerchant.customer_data.business_details.website_urls = []
    	newBaMerchant.customer_data.business_details.website_urls[0] = faker.internet.url()
    	//business_details.phone_contacts
    	newBaMerchant.customer_data.business_details.phone_contacts = []
    	newBaMerchant.customer_data.business_details.phone_contacts[0] = {}
    	newBaMerchant.customer_data.business_details.phone_contacts[0].phone_number_details = {}
    	newBaMerchant.customer_data.business_details.phone_contacts[0].phone_number_details.country_code = "1"
    	newBaMerchant.customer_data.business_details.phone_contacts[0].phone_number_details.national_number = "6025550128"
    	newBaMerchant.customer_data.business_details.phone_contacts[0].phone_type = "FAX"
    	//business_details.email_contacts
    	newBaMerchant.customer_data.business_details.email_contacts = []
    	newBaMerchant.customer_data.business_details.email_contacts[0] = {}
    	newBaMerchant.customer_data.business_details.email_contacts[0].email_address = newBaMerchant.customer_data.person_details.email_address
    	newBaMerchant.customer_data.business_details.email_contacts[0].role = "CUSTOMER_SERVICE"
    	//business_details.business_address
    	newBaMerchant.customer_data.business_details.business_address = {}
        newBaMerchant.customer_data.business_details.business_address.line1 = faker.address.streetAddress()
        newBaMerchant.customer_data.business_details.business_address.city = 'Gilbert'
        newBaMerchant.customer_data.business_details.business_address.country_code = 'US'
        newBaMerchant.customer_data.business_details.business_address.postal_code = '85298'
        newBaMerchant.customer_data.business_details.business_address.state = 'AZ'
        //business_details.annual_sales_volume_range
        newBaMerchant.customer_data.business_details.annual_sales_volume_range = {}
        newBaMerchant.customer_data.business_details.annual_sales_volume_range.minimum_amount = {}
        newBaMerchant.customer_data.business_details.annual_sales_volume_range.minimum_amount.currency = "USD"
        newBaMerchant.customer_data.business_details.annual_sales_volume_range.minimum_amount.value = 60000
        newBaMerchant.customer_data.business_details.annual_sales_volume_range.maximum_amount = {}
        newBaMerchant.customer_data.business_details.annual_sales_volume_range.maximum_amount.currency = "USD"
        newBaMerchant.customer_data.business_details.annual_sales_volume_range.maximum_amount.value = 160000
        //business_details.average_monthly_volume_range
        newBaMerchant.customer_data.business_details.average_monthly_volume_range = {}
        newBaMerchant.customer_data.business_details.average_monthly_volume_range.minimum_amount = {}
        newBaMerchant.customer_data.business_details.average_monthly_volume_range.minimum_amount.currency = "USD"
        newBaMerchant.customer_data.business_details.average_monthly_volume_range.minimum_amount.value = 6000
        newBaMerchant.customer_data.business_details.average_monthly_volume_range.maximum_amount = {}
        newBaMerchant.customer_data.business_details.average_monthly_volume_range.maximum_amount.currency = "USD"
        newBaMerchant.customer_data.business_details.average_monthly_volume_range.maximum_amount.value = 12000
    return newBaMerchant
}
