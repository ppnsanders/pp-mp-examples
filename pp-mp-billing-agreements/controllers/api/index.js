'use strict'
const paypalConfig = ppConfig()
const request = require('request')

module.exports = (router) => {

	router.get('/config', (req, res) => {
		res.json(paypalConfig)
	})

}
