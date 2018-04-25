pp-mp-billing-agreements
===========

PayPal Marketplaces - Billing Agreements

*Description:* Enable your customers to save PayPal as a payment method on your *marketplace* or *Platform* and use that payment method to pay for an order from any merchant.  This type of Billing Agreement is known as a "Channel Initiated Billing Agreement" or "CIB" for short.  This example shows the Channel Initiated Billing Agreement Flow with an Order and `disbursement_mode: INSTANT`.

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
