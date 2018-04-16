'use strict'

angular.module('ppMpOrder').directive('headerNav', [ () => {
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