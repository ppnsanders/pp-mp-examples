pp-mp-order
===========

PayPal For Platforms Order - Instant Disbursement

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