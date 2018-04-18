'use strict'

angular.module('ppMpManagedPath').directive('managedPage', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'managedPageModel', ($scope, managedPageModel) => {
			$scope.model = managedPageModel
			$scope.model.setup()
		}],
		templateUrl: '/js/pages/managed-page/template.html'
	}
}])