# PayPal For Platforms API Example Apps

-----

> **Disclaimer:** The applications provided here and all code is provided as-is.  These examples are intended to be **EXAMPLES** and are not intended to be used in a production environment.  I am employed at PayPal, however, the code herein is provided from myself as an example not from PayPal, Inc.  I hope these are helpful to helping you understand the API's, but please do not use in a production environment.

## Setup & Install

1. Clone this Repo `$ git clone https://github.com/ppnsanders/pp-mp-examples.git`
2. Run `$ cd pp-mp-examples`
3. Run `$ npm install`
4. Run `$ node install.js`
5. Run `$ node setup.js`  //See the [configuration section below](https://github.com/ppnsanders/pp-mp-examples#configuration) for details.

## Running the Demo App

This repository contains 5 independent applications:

1. [pp-mp-connected-path](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-connected-path)
2. [pp-mp-managed-path](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-managed-path)
3. [pp-mp-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-order)
4. [pp-mp-delayed-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-delayed-order)
5. [pp-mp-billing-agreements](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-billing-agreements)

I have built these as individual applications to ensure that you can test/demo the specific pieces you want to use and don't need to run all of them or look through multiple files of code to see how it all works.

Once you have ran the initial Setup & Install, you can then run the following commands:

1. Run `$ cd pp-mp-order`
2. Run `$ npm start`

The Setup & Install already installed all the NPM dependencies for all of the apps, so this should start up without any issues.  You would change the `pp-mp-order` in the above command to the appropriate directory for the app you want to run (i.e. `pp-mp-order`, `pp-mp-connected-path`, `pp-mp-managed-path`, `pp-mp-billing-agreements`, or `pp-mp-delayed-order`).

## Configuration

When you run `$ node setup.js` you'll be prompted for your `client_id`, `client_secret`, `attributionId`, `email`, `payerId`, `brandName`, and `environment`.  These are your PARTNER details, not your merchant details.  This will allow you to run transactions as the Partner on behalf of a merchant. 

Information you'll need:

```json
{
	"client_id": "<YOUR CLIENT ID>",
	"client_secret": "<YOUR CLIENT SECRET>",
	"attributionId": "<YOUR BN CODE>",
	"email": "<YOUR PARTNER ACCOUNT EMAIL>",
	"payerId": "<YOUR PARTNER MERCHANT ID>",
	"brandName": "<YOUR PARTNER BRAND NAME>",
	"environment": "sandbox"
}
```

| Variable Name | Description |
|:-------------:| ----------- |
| `client_id`   | This is the `client_id` associated with your app from [developer.paypal.com](https://developer.paypal.com/developer/applications/) |
| `client_secret` | This is the `client_secret` associated with your app from [developer.paypal.com](https://developer.paypal.com/developer/applications/) |
| `attributionId` | This is the "BN Code" that was assigned to your from your Partner Relationship Manager. |
| `email` | This is the email address associated with your Partner account. |
| `payerId` | This is the "Merchant ID" or "Payer ID" associated with your Partner account. |
| `brandName` | This is your Partner "Brand Name", this may be the name of your company or application. |
| `environment` | This is the environment you wish to test with.  Default value is `sandbox` |

## PayPal For Platforms - Onboarding - Connected Path

1. [pp-mp-connected-path](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-connected-path)

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

## PayPal For Platforms - Onboarding - Managed Path

1. [pp-mp-managed-path](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-managed-path)

**Description:** A platform model in which **the platform assumes financial liability**. Sellers are **NOT** required to have PayPal Business accounts.

> Within the app, once you create a reference account with Managed-Path you can "Save as default".  Once you save that reference account if you open the [pp-mp-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-order) or [pp-mp-delayed-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-delayed-order) apps you will see your newly created reference account info in the Default config.  Click "Use Default Merchant" to continue to create the Order and run the checkout.

**Documentation:**

* [Managed Path vs. Connected Path](https://www.paypal.com/us/selfhelp/article/what-integration-methods-are-available-for-paypal-for-marketplaces-ts2126)
* [Developer Documentation](https://developer.paypal.com/docs/marketplaces/managed/)

## PayPal For Platforms - Order API

The [PayPal For Platforms Order API](https://developer.paypal.com/docs/api/orders/) is shown here in three modules.

1. [pp-mp-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-order)
2. [pp-mp-delayed-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-delayed-order)
3. [pp-mp-billing-agreements](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-billing-agreements)

**Documentation:**

* [Developer Documentation](https://developer.paypal.com/docs/marketplaces/orders/integration-guide/)

### pp-mp-order

**Description:** This PayPal use-case is a very common use-case.  Most commonly known in PayPal terms as the "PayPal Mark Use-Case".  This is where the Consumer goes through a checkout flow in a very similar way that they do to use a credit card on the merchants website. 

*Consumer Experience Steps:*

1. Add items to the cart.
2. Checkout
3. Fill out Shipping information.
4. Select shipping method.
5. See total (Subtotal + Shipping + Tax)
6. Make Payment
7. Review & Confirm Order

To apply those steps to the [PayPal For Platforms Order API](https://developer.paypal.com/docs/api/orders/), consider that you would create the order after step 5.  Step 6, "Make Payment", is the part where the consumer goes to PayPal, or enters their credit card details.  When the consumer returns to the merchants website, they will see their order details along with their payment method information and complete the checkout or "Review & Confirm Order".

*PayPal Order Steps:*

1. [Create Order](https://developer.paypal.com/docs/api/orders/#orders_create)
2. Show [PayPal Button](https://developer.paypal.com/demo/checkout/#/pattern/checkout)
3. Handle callback from PayPal.
4. Pay Order (Confirm Order)

### pp-mp-delayed-order

**Description:** This PayPal use-case is very similar to the above pp-mp-order use-case with the exception that the Platform has the ability to delay the disbursement of the payment to the seller/merchant.  This helps the Platform manage risk and improve the overall consumer experience.  I will use a simple example here to articulate the concept, but there are many other use-cases. 

_Example:_  A Seller is selling an item on your Platform and the price of that item is $500.00 USD.  This is a new Seller that hasn't done business on your Platform before and selling such a high dollar item isn't very common on your particular Platform.  Without any limitations on the Seller, you could do a number of things to reduce the risk with this item.  You choose to delay disbursement to the Seller until the Seller has provided a Tracking Number for the shippment of the item, and that Tracking Number shows that the item was received at the address provided by the consumer.

> **Disclaimer:** The above example is purely an example, not a recommendation.  The use-case that justifies your usage of delayed disbursement could be a million things and is up to you as the Platform owner.

*Consumer Experience Steps:*

1. Add items to the cart.
2. Checkout
3. Fill out Shipping information.
4. Select shipping method.
5. See total (Subtotal + Shipping + Tax)
6. Make Payment
7. Review & Confirm Order

In the above example, all of the steps as discussed in the pp-mp-order use-case apply, the consumer goes through checkout in the same manner.  The difference is that the Platform doesn't allow PayPal to disburse the funds to the Seller until your criteria is met.  This allows you to protect the consumer by ensuring that the item shows valid tracking with delivery before giving the Seller the funds.

*Seller Experience Steps:*

1. Seller's item is sold on the Platform.
2. Seller ships the item and uploads the relevant tracking number.
3. The tracking number shows that it was delivered at the City/State of the Consumer's shipping address.
4. The Platform disburses the funds to the seller as per the Platform terms of service with the Seller.

*PayPal Order Steps:*

1. [Create Order](https://developer.paypal.com/docs/api/orders/#orders_create)
2. Show [PayPal Button](https://developer.paypal.com/demo/checkout/#/pattern/checkout)
3. Handle callback from PayPal
4. [Pay Order](https://developer.paypal.com/docs/api/orders/#orders-payment-actions_pay) (Confirm Order)
5. [Funds Disbursement](https://developer.paypal.com/docs/api/referenced-payouts/#referenced-payouts-items_create)

### pp-mp-billing-agreements

**Description:** Enable your customers to save PayPal as a payment method on your Platform and use that payment method to pay for an order from any merchant on your Platform.  This type of Billing Agreement is known as a "Channel Initiated Billing Agreement" or "CIB" for short.  This example shows the Channel Initiated Billing Agreement Flow with an Order and `disbursement_mode: INSTANT`.

*Consumer Experience Steps:*

1. Add items to the cart.
2. Checkout
3. Fill out Shipping information.
4. Select shipping method.
5. See total (Subtotal + Shipping + Tax)
6. Agree to Billing Agreement
7. Review & Confirm Order

*Partner API Steps:*

1. [Create Order](https://developer.paypal.com/docs/api/orders/#orders_create)
2. Create Billing Agreement Token
3. Handle callback from PayPal
4. Execute Billing Agreeement Token
5. [Using the Billing Agreement Pay for the Order](https://developer.paypal.com/docs/marketplaces/orders/integration-guide/#additional-ways-to-pay)

The Billing Agreement ID returned in the `/execute` API call can be saved and used for future transactions with any merchant on your platform.
