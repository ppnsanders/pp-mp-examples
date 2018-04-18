pp-mp-connected-path
===========

PayPal Marketplaces - Connected Path 

*Description:* This onboarding solution allows you to create a PayPal Referral URL and allows your customers to create a PayPal account *OR* link and grant permissions on an existing PayPal account. 

*Merchant Experience Steps:*

1. Fill out forms.
2. Continue to PayPal.
3. Create/Login to Account.
4. Grant Permissions.
5. Return to Partner Application.

For the first step, this is simplified by the Partner using information they already have which will reduce the number of fields the Merchant (Customer) must provide in order to create/link an account.

*Partner/Connected Path Steps:*

1. Collect Information to build the [partner-referrals](https://developer.paypal.com/docs/api/partner-referrals/#partner-referrals_create) request object.
2. Create the Referral URL.
3. Redirect the Customer.
4. Handle the return to your site.
5. Check the Merchant Account Status [merchant-integrations](https://developer.paypal.com/docs/api/partner-referrals/#merchant-integration).

[PayPal Documentation](https://developer.paypal.com/docs/marketplaces/connected/)

