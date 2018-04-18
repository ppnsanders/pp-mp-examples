'use strict'

angular.module('ppMpManagedPath').directive('headerNav', [ () => {
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