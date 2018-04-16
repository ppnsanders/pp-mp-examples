'use strict'

//since we're using DustJS, 
//we must set the startSymbol and endSymbol to '[[' and ']]'.

angular.module('ppMpOrder', ['ngRoute', 'ngCookies', 'angularLoad', 'paypal-button'])
.config(['$interpolateProvider', '$cookiesProvider', '$routeProvider', '$locationProvider', ($interpolateProvider, $cookiesProvider, $routeProvider, $locationProvider) => {
    $interpolateProvider
        .startSymbol('[[');
    $interpolateProvider
        .endSymbol(']]');
    $cookiesProvider.defaults.path = '/';
    $cookiesProvider.defaults.secure = false;
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
    	.when('/order/create', {
    		template: '<order-page></order-page>'
    	})
    	.when('/order/return', {
    		template: '<order-return></order-return>'
    	})
}])
