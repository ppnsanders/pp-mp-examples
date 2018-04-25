'use strict'
const paypalConfig = ppConfig()
const request = require('request')

module.exports = (router) => {

	router.post('/create', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const options = {
					url: "https://api.sandbox.paypal.com/v1/billing-agreements/agreement-tokens",
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
						console.log('ERROR in ORDER REQUEST')
						console.log(err)
						res.json(err)
					} else {
						res.json(body)
					}
				})
			}
		})
	})

	router.post('/:token/execute', (req, res) => {
		getAccessToken(paypalConfig, (err, credentials) => {
			if(err) {
				console.log('ERROR')
				console.log(err)
			} else {
				const options = {
					url: "https://api.sandbox.paypal.com/v1/billing-agreements/" + req.params.token + "/agreements",
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
						console.log('ERROR in PAY ORDER REQUEST')
						console.log(err)
						res.json(err)
					} else {
						res.json(body)
					}
				})
			}
		})
	})

  router.post('/:token/cancel', (req, res) => {
    getAccessToken(paypalConfig, (err, credentials) => {
      if(err) {
        console.log('ERROR')
        console.log(err)
      } else {
        const options = {
          url: "https://api.sandbox.paypal.com/v1/billing-agreements/agreements/" + req.params.token + "/cancel",
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
            console.log('ERROR in PAY ORDER REQUEST')
            console.log(err)
            res.json(err)
          } else {
            res.json(body)
          }
        })
      }
    })
  })

  router.get('/:baId', (req, res) => {
    getAccessToken(paypalConfig, (err, credentials) => {
      if(err) {
        console.log('ERROR')
        console.log(err)
      } else {
        const options = {
          url: "https://api.sandbox.paypal.com/v1/billing-agreements/agreements/" + req.params.baId,
                  method: "GET",
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
            console.log('ERROR in PAY ORDER REQUEST')
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
