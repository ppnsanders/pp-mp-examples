pp-mp-connected-path
===========

PayPal For Platforms - Connected Path 

**Description:** A platform model in which each individual PayPal seller assumes financial liability, rather than the platform. All sellers must have PayPal Business accounts.

> Within the app, once you create/link a merchant account with Connected-Path you can "Save as default".  Once you save that merchant if you open the [pp-mp-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-order) or [pp-mp-delayed-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-delayed-order) apps you will see your newly created/linked merchant info in the Default config.  Click "Use Default Merchant" to continue to create the Order and run the checkout.

*Merchant Experience Steps:*

1. Fill out forms.
2. Continue to PayPal.
3. Create/Login to Account.
4. Grant Permissions.
5. Return to Partner Application.

For the first step, this is simplified by the Partner using information they already have which will reduce the number of fields the Merchant (Customer) must provide in order to create/link an account.

*Partner/Connected Path Steps:*

1. Collect Information to build the [partner-referrals](https://developer.paypal.com/docs/api/partner-referrals/#partner-referrals_create) request object.
2. Create the [Partner Referral URL](https://developer.paypal.com/docs/api/partner-referrals/#partner-referrals_create).
3. Redirect the Customer.
4. Handle the return to your site.
5. Check the [Merchant Account Status](https://developer.paypal.com/docs/api/partner-referrals/#merchant-integration).

> Note: When using the Connected-Path Integration you'll need to use an existing Sandbox Account to test the permissioning and any following API's.  The reason for this is because you can't confirm an email address via the Connected Path API.  So first, go to [developer.paypal.com](https://developer.paypal.com/developer/accounts/) in the Accounts Section and click "Create Account".  You will create the account here as it will automatically confirm the email on the account.  This way, when you go to PayPal within the Connected-Path flow, you'll use that account to login & grant permissions to the Partner Account for future API's/Processes. 

**Documentation:**

* [Connected Path vs. Managed Path](https://www.paypal.com/us/selfhelp/article/what-integration-methods-are-available-for-paypal-for-marketplaces-ts2126)
* [Developer Documentation](https://developer.paypal.com/docs/marketplaces/connected/)