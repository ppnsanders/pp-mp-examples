'use strict'
const paypalConfig = ppConfig()
const request = require('request')
const ConnectedPathMerchantModel = require('../../models/connected-path')

module.exports = (router) => {

	router.get('/config', (req, res) => {
		res.json(paypalConfig)
	})

	router.get('/newMerchant', (req, res) => {
		const merchantObj = new ConnectedPathMerchantModel()
		res.json(merchantObj)
	})

	router.get('/status/:merchantId', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const options = {
                  url: "https://api.sandbox.paypal.com/v1/customer/partners/" + paypalConfig.payerId + "/merchant-integrations/" + req.params.merchantId,
                  method: "GET",
                  headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Accept-Language": "en_US",
                    "Authorization": "Bearer " + credentials.access_token,
                    "PayPal-Partner-Attribution-Id": paypalConfig.attributionId
                  },
                  body: {},
                  json: true
                }
                request(options, (err, response, body) => {
                	if(err) {
						console.log('ERROR in GET MERCHANT ACCOUNT STATUS')
						console.log(err)
						res.json(err)
					} else {
						res.json(body)
					}
                })
			}
		})
	})

	router.post('/partner-referrals', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const options = {
                      url: "https://api.sandbox.paypal.com/v1/customer/partner-referrals",
                      method: "POST",
                      headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "Accept-Language": "en_US",
                        "Authorization": "Bearer " + credentials.access_token,
                    	"PayPal-Partner-Attribution-Id": paypalConfig.attributionId
                      },
                      body: req.body,
                      json: true
                }
				request(options, (err, response, body) => {
					if(err) {
						console.log('ERROR in POST PARTNER-REFERRALS')
						console.log(err)
						res.json(err)
					} else {
						res.json(body)
					}
				})
			}
		})
	})

}

function getAccessToken(partner, callback) {
    const reqObj = {
        "url": "https://api.sandbox.paypal.com/v1/oauth2/token",
        "method": "POST",
        "auth": {
          "user": partner.client_id,
          "pass": partner.client_secret,
          "sendImmediately": true
        },
        "headers": {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept-Language": "en_US"
        },
        "form": {
            "grant_type": "client_credentials"
        }
    }
    request(reqObj, (err, response, body) => {
        if(err) {
            console.log('ERROR: ', err)
            callback(err)
        } else {
        	const credentials = JSON.parse(body)
            callback(null, credentials)
        }
    })
}
