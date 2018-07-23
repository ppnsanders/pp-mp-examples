'use strict'
const paypalConfig = ppConfig()
const request = require('request')
const ConnectedPathMerchantModel = require('../../models/connected-path')
const ConnectedPathBaMerchantModel = require('../../models/connected-path/baMerchant')
const ConnectedPathSellerModel = require('../../models/connected-path/casualSeller')
const faker = require('faker')

module.exports = (router) => {

    router.get('/config', (req, res) => {
        res.json(paypalConfig)
    })

    router.get('/newMerchant', (req, res) => {
        const merchantObj = new ConnectedPathMerchantModel()
        res.json(merchantObj)
    })

  router.get('/newSeller', (req, res) => {
    const sellerObj = new ConnectedPathSellerModel()
    res.json(sellerObj)
  })

    router.get('/ba/newMerchant', (req, res) => {
        getAccessToken(paypalConfig, (err, credentials) => {
          if(err) {
            console.log('ERROR')
            console.log(err)
            res.json(err)
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
                body: {
                    "description":"Billing Agreement for merchant",
                    "payer": { 
                        "payment_method":"paypal"
                    },
                    "plan":{
                        "type":"MERCHANT_INITIATED_BILLING_SINGLE_AGREEMENT",
                        "merchant_preferences":{
                            "cancel_url":"http://localhost:8000/ba-return/",
                            "return_url":"http://localhost:8000/ba-return/",    
                            "accepted_pymt_type":"Instant",
                            "skip_shipping_address": true,
                            "immutable_shipping_address": true
                        }
                    },
                    "merchant_custom_data": faker.random.uuid()
                 },
                json: true
            }
            request(options, (err, response, body) => {
                if(err) {
                  console.log('ERROR in create BA for Connected Path')
                  console.log(err)
                  res.json(err)
                } else {
                    const baMerchantObj = new ConnectedPathBaMerchantModel(body)
                    res.json(baMerchantObj)
                }
            })
          }
        })
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

    router.get('/ba/execute/:token', (req, res) => {
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
                      body: {},
                      json: true
                }
                request(options, (err, response, body) => {
                    if(err) {
                        console.log('ERROR in GET BA/Execute')
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
