pp-mp-delayed-order
===========

PayPal For Platforms Order - Delayed Disbursement

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
