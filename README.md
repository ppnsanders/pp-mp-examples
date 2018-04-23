# PayPal Marketplaces API Example Apps

-----

## Setup & Install

1. Clone this Repo `$ git clone https://github.com/ppnsanders/pp-mp-examples.git`
2. Run `$ cd pp-mp-examples`
3. Run `$ npm install`
4. Run `$ node install.js`
5. Run `$ node setup.js`  //See the configuration section below for details.

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

## Marketplaces Onboarding - Connected Path

1. [pp-mp-connected-path](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-connected-path)

*Description:* A marketplace model in which each individual PayPal seller assumes financial liability, rather than the marketplace. All sellers must have PayPal Business accounts.

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

*Documentation:*

* [Connected Path vs. Managed Path](https://www.paypal.com/us/selfhelp/article/what-integration-methods-are-available-for-paypal-for-marketplaces-ts2126)
* [Developer Documentation](https://developer.paypal.com/docs/marketplaces/connected/)

## Marketplaces Onboarding - Managed Path

1. [pp-mp-managed-path](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-managed-path)

*Description:* A marketplace model in which the marketplace assumes financial liability. Sellers aren't required to have PayPal Business accounts.

*Documentation:*

* [Managed Path vs. Connected Path](https://www.paypal.com/us/selfhelp/article/what-integration-methods-are-available-for-paypal-for-marketplaces-ts2126)
* [Developer Documentation](https://developer.paypal.com/docs/marketplaces/managed/)

## Marketplaces Order API

The [Marketplaces Order API](https://developer.paypal.com/docs/api/orders/) is shown here in two modules.

1. [pp-mp-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-order)
2. [pp-mp-delayed-order](https://github.com/ppnsanders/pp-mp-examples/tree/master/pp-mp-delayed-order)

*Documentation:*

* [Developer Documentation](https://developer.paypal.com/docs/marketplaces/orders/integration-guide/)

### pp-mp-order

*Description:* This PayPal use-case is a very common use-case.  Most commonly known in PayPal terms as the "PayPal Mark Use-Case".  This is where the Consumer goes through a checkout flow in a very similar way that they do to use a credit card on the merchants website. 

*Consumer Experience Steps:*

1. Add items to the cart.
2. Checkout
3. Fill out Shipping information.
4. Select shipping method.
5. See total (Subtotal + Shipping + Tax)
6. Make Payment
7. Review & Confirm Order

To apply those steps to the [Marketplaces Order API](https://developer.paypal.com/docs/api/orders/), consider that you would create the order after step 5.  Step 6, "Make Payment", is the part where the consumer goes to PayPal, or enters their credit card details.  When the consumer returns to the merchants website, they will see their order details along with their payment method information and complete the checkout or "Review & Confirm Order".

*PayPal Order Steps:*

1. [Create Order](https://developer.paypal.com/docs/api/orders/#orders_create)
2. Show [PayPal Button](https://developer.paypal.com/demo/checkout/#/pattern/checkout)
3. Handle callback from PayPal.
4. Pay Order (Confirm Order)

### pp-mp-delayed-order

*Description:* This PayPal use-case is very similar to the above pp-mp-order use-case with the exception that the Marketplace has the ability to delay the disbursement of the payment to the seller/merchant.  This helps the Marketplace manage risk and improve the overall consumer experience.  I will use a simple example here to articulate the concept, but there may be other use-cases. 

_Example:_  A Seller is selling an item on your Marketplace and the price of that item is $500.00 USD.  This is a new Seller that hasn't done business on your Marketplace before and selling such a high dollar item isn't very common on your particular Marketplace.  Without any limitations on the Seller, you could do a number of things to reduce the risk with this item.  You choose to delay disbursement to the Seller until the Seller has provided a Tracking Number for the shippment of the item, and that Tracking Number shows that the item was received at the address provided by the consumer.

*Consumer Experience Steps:*

1. Add items to the cart.
2. Checkout
3. Fill out Shipping information.
4. Select shipping method.
5. See total (Subtotal + Shipping + Tax)
6. Make Payment
7. Review & Confirm Order

In the above example, all of the steps as discussed in the pp-mp-order use-case apply, the consumer goes through checkout in the same manner.  The difference is that the Marketplace doesn't allow PayPal to disburse the funds to the Seller until your criteria is met.  This allows you to protect the consumer by ensuring that the item shows valid tracking with delivery before giving the Seller the funds.

*Seller Experience Steps:*

1. Seller's item is sold on the Marketplace.
2. Seller ships the item and uploads the relevant tracking number.
3. The tracking number shows that it was delivered at the City/State of the Consumer's shipping address.
4. The Marketplace disburses the funds to the seller as per the Marketplace terms of service with the Seller.

*PayPal Order Steps:*

1. [Create Order](https://developer.paypal.com/docs/api/orders/#orders_create)
2. Show [PayPal Button](https://developer.paypal.com/demo/checkout/#/pattern/checkout)
3. Handle callback from PayPal
4. [Pay Order](https://developer.paypal.com/docs/api/orders/#orders-payment-actions_pay) (Confirm Order)
5. [Funds Disbursement](https://developer.paypal.com/docs/api/referenced-payouts/#referenced-payouts-items_create)
