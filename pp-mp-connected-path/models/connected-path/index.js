'use strict'

const paypalConfig = ppConfig()
const faker = require('faker')


module.exports = function ConnectedPathMerchantModel() {
    let newMerchant = {}
    	//requested_capabilities
    	newMerchant.requested_capabilities = []
    	newMerchant.requested_capabilities[0] = {}
    	newMerchant.requested_capabilities[0].capability = "API_INTEGRATION"
    	newMerchant.requested_capabilities[0].api_integration_preference = {}
    	newMerchant.requested_capabilities[0].api_integration_preference.partner_id = paypalConfig.payerId
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_api_integration = {}
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_api_integration.integration_method = "PAYPAL"
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_api_integration.integration_type = "THIRD_PARTY"
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details = {}
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.partner_client_id = paypalConfig.client_id
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list = []
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[0] = "PAYMENT"
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[1] = "REFUND"
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[2] = "PARTNER_FEE"
    	newMerchant.requested_capabilities[0].api_integration_preference.rest_third_party_details.feature_list[3] = "DELAY_FUNDS_DISBURSEMENT"
    	//web_experience_preference
    	newMerchant.web_experience_preference = {}
    	newMerchant.web_experience_preference.partner_logo_url = faker.image.imageUrl(200, 200, 'technics', true)
    	newMerchant.web_experience_preference.return_url = 'http://localhost:8000/referral-return'
    	newMerchant.web_experience_preference.action_renewal_url = 'http://localhost:8000/referral-return'
    	//collected_consents
    	newMerchant.collected_consents = []
    	newMerchant.collected_consents[0] = {}
    	newMerchant.collected_consents[0].type = "SHARE_DATA_CONSENT"
    	newMerchant.collected_consents[0].granted = true
    	//products
    	newMerchant.products = []
    	newMerchant.products[0] = "EXPRESS_CHECKOUT"
    	//customer_data
    	newMerchant.customer_data = {}
    	newMerchant.customer_data.customer_type = "MERCHANT"
    	newMerchant.customer_data.preferred_language_code = "en_US"
    	newMerchant.customer_data.primary_currency_code = "USD"
    	//customer_data.financial_instrument_data
    	newMerchant.customer_data.financial_instrument_data = {}
    	newMerchant.customer_data.financial_instrument_data.bank_details = []
    	newMerchant.customer_data.financial_instrument_data.bank_details[0] = {}
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].nick_name = "BofA Bank Acct"
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].account_number = "123405668293"
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].account_type = "CHECKING"
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].currency_code = "USD"
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers = []
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers[0] = {}
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers[0].type = "ROUTING_NUMBER_1"
    	newMerchant.customer_data.financial_instrument_data.bank_details[0].identifiers[0].value = "123456789"
    	//customer_data.partner_specific_identifiers
    	newMerchant.customer_data.partner_specific_identifiers = []
    	newMerchant.customer_data.partner_specific_identifiers[0] = {}
    	newMerchant.customer_data.partner_specific_identifiers[0].type = "TRACKING_ID"
    	newMerchant.customer_data.partner_specific_identifiers[0].value = faker.random.uuid()
    	//customer_data.person_details
    	newMerchant.customer_data.person_details = {}
    	newMerchant.customer_data.person_details.email_address = faker.internet.email()
    	newMerchant.customer_data.person_details.date_of_birth = {}
    	newMerchant.customer_data.person_details.date_of_birth.event_type = "BIRTH"
    	newMerchant.customer_data.person_details.date_of_birth.event_date = "1986-2-3T23:59:59.999Z"
    	newMerchant.customer_data.person_details.nationality_country_code = "US"
    	newMerchant.customer_data.person_details.name = {}
    	newMerchant.customer_data.person_details.name.given_name = faker.name.firstName()
    	newMerchant.customer_data.person_details.name.surname = faker.name.lastName()
    	//business_details
    	newMerchant.customer_data.business_details = {}
    	newMerchant.customer_data.business_details.business_type = "PROPRIETORSHIP"
    	newMerchant.customer_data.business_details.category = "1008"
    	newMerchant.customer_data.business_details.sub_category = "2076"
    	newMerchant.customer_data.business_details.business_description = "Physical goods from the Test Store"
    	//business_details.identity_documents
    	newMerchant.customer_data.business_details.identity_documents = []
    	newMerchant.customer_data.business_details.identity_documents[0] = {}
    	newMerchant.customer_data.business_details.identity_documents[0].type = "TAX_IDENTIFICATION_NUMBER"
    	newMerchant.customer_data.business_details.identity_documents[0].value = "ABCDEF34646"
    	newMerchant.customer_data.business_details.identity_documents[0].partial_value = false
    	newMerchant.customer_data.business_details.identity_documents[0].issuer_country_code = "US"
    	//business_details.names
    	newMerchant.customer_data.business_details.names = []
    	newMerchant.customer_data.business_details.names[0] = {}
    	newMerchant.customer_data.business_details.names[0].type = "LEGAL"
    	newMerchant.customer_data.business_details.names[0].name = "Test Store"
    	//business_details.event_dates
    	newMerchant.customer_data.business_details.event_dates = []
    	newMerchant.customer_data.business_details.event_dates[0] = {}
    	newMerchant.customer_data.business_details.event_dates[0].event_type = "ESTABLISHED"
    	newMerchant.customer_data.business_details.event_dates[0].event_date = "1999-01-01T19:19:19Z"
    	//business_details.website_urls
    	newMerchant.customer_data.business_details.website_urls = []
    	newMerchant.customer_data.business_details.website_urls[0] = faker.internet.url()
    	//business_details.phone_contacts
    	newMerchant.customer_data.business_details.phone_contacts = []
    	newMerchant.customer_data.business_details.phone_contacts[0] = {}
    	newMerchant.customer_data.business_details.phone_contacts[0].phone_number_details = {}
    	newMerchant.customer_data.business_details.phone_contacts[0].phone_number_details.country_code = "1"
    	newMerchant.customer_data.business_details.phone_contacts[0].phone_number_details.national_number = "6025550128"
    	newMerchant.customer_data.business_details.phone_contacts[0].phone_type = "FAX"
    	//business_details.email_contacts
    	newMerchant.customer_data.business_details.email_contacts = []
    	newMerchant.customer_data.business_details.email_contacts[0] = {}
    	newMerchant.customer_data.business_details.email_contacts[0].email_address = newMerchant.customer_data.person_details.email_address
    	newMerchant.customer_data.business_details.email_contacts[0].role = "CUSTOMER_SERVICE"
    	//business_details.business_address
    	newMerchant.customer_data.business_details.business_address = {}
        newMerchant.customer_data.business_details.business_address.line1 = faker.address.streetAddress()
        newMerchant.customer_data.business_details.business_address.city = 'Gilbert'
        newMerchant.customer_data.business_details.business_address.country_code = 'US'
        newMerchant.customer_data.business_details.business_address.postal_code = '85298'
        newMerchant.customer_data.business_details.business_address.state = 'AZ'
        //business_details.annual_sales_volume_range
        newMerchant.customer_data.business_details.annual_sales_volume_range = {}
        newMerchant.customer_data.business_details.annual_sales_volume_range.minimum_amount = {}
        newMerchant.customer_data.business_details.annual_sales_volume_range.minimum_amount.currency = "USD"
        newMerchant.customer_data.business_details.annual_sales_volume_range.minimum_amount.value = 60000
        newMerchant.customer_data.business_details.annual_sales_volume_range.maximum_amount = {}
        newMerchant.customer_data.business_details.annual_sales_volume_range.maximum_amount.currency = "USD"
        newMerchant.customer_data.business_details.annual_sales_volume_range.maximum_amount.value = 160000
        //business_details.average_monthly_volume_range
        newMerchant.customer_data.business_details.average_monthly_volume_range = {}
        newMerchant.customer_data.business_details.average_monthly_volume_range.minimum_amount = {}
        newMerchant.customer_data.business_details.average_monthly_volume_range.minimum_amount.currency = "USD"
        newMerchant.customer_data.business_details.average_monthly_volume_range.minimum_amount.value = 6000
        newMerchant.customer_data.business_details.average_monthly_volume_range.maximum_amount = {}
        newMerchant.customer_data.business_details.average_monthly_volume_range.maximum_amount.currency = "USD"
        newMerchant.customer_data.business_details.average_monthly_volume_range.maximum_amount.value = 12000
    return newMerchant
}
