'use strict'

angular.module('ppMpConnectedPath').directive('headerNav', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', ($scope) => {
			$scope.nav = [ 
							{
								url: "/",
								text: "Home"
							},
							{
								url: "/casual-seller",
								text: "Casual Seller"
							}
						]
		}],
		templateUrl: '/js/partials/header-nav/template.html'
	}
}])