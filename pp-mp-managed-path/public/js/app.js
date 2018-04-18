'use strict'

//since we're using DustJS, 
//we must set the startSymbol and endSymbol to '[[' and ']]'.

angular.module('ppMpManagedPath', ['ngRoute', 'ngCookies'])
.config(['$interpolateProvider', '$cookiesProvider', '$routeProvider', '$locationProvider', ($interpolateProvider, $cookiesProvider, $routeProvider, $locationProvider) => {
    $interpolateProvider
        .startSymbol('[[');
    $interpolateProvider
        .endSymbol(']]');
    $cookiesProvider.defaults.path = '/';
    $cookiesProvider.defaults.secure = false;
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
    	.when('/managed-page', {
    		template: '<managed-page></managed-page>'
    	})
}])
