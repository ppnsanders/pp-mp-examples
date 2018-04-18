'use strict'

//since we're using DustJS, 
//we must set the startSymbol and endSymbol to '[[' and ']]'.

angular.module('ppMpConnectedPath', ['ngRoute', 'ngCookies'])
.config(['$interpolateProvider', '$cookiesProvider', '$routeProvider', '$locationProvider', ($interpolateProvider, $cookiesProvider, $routeProvider, $locationProvider) => {
    $interpolateProvider
        .startSymbol('[[');
    $interpolateProvider
        .endSymbol(']]');
    $cookiesProvider.defaults.path = '/';
    $cookiesProvider.defaults.secure = false;
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
    	.when('/referral-page', {
    		template: '<referral-page></referral-page>'
    	})
    	.when('/referral-return', {
    		template: '<referral-return></referral-return>'
    	})
}])
