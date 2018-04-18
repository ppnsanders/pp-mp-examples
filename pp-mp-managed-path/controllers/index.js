'use strict';

module.exports = function (router) {

    router.get('/', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: 'home-page'})
    })

    router.get('/managed-return', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: 'managed-return' })
    })

    router.get('/:page', (req, res) => {
    	res.cookie('XSRF-TOKEN', res.locals._csrf) //setting a cookie that is accessible by Angular
        res.render('index', { component: req.params.page })
    })

};
