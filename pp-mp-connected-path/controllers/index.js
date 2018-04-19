'use strict';

module.exports = function (router) {

    router.get('/', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: 'referral-page'})
    })

    router.get('/referral-return', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: 'referral-return' })
    })

    router.get('/:page', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: req.params.page })
    })

};
