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
							}
						]
		}],
		templateUrl: '/js/partials/header-nav/template.html'
	}
}])