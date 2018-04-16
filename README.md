# PayPal Marketplaces API Example Apps

-----

## Setup & Install

1. Fork or Clone this Repo.
2. Run `$ cd pp-mp-examples`
3. Run `$ node install.js`

## Configuration

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


