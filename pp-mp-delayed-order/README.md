pp-mp-delayed-order
===========

PayPal Marketplaces Order - Delayed Disbursement

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

1. Create Order
2. Show PayPal Button
3. Handle callback from PayPal
4. Pay Order (Confirm Order)
5. Funds Disbursement
