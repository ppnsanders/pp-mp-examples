'use strict'

angular.module('ppMpConnectedPath').directive('baOnboarding', [ () => {
	return {
		restrict: 'E',
		scope: {},
		controller: ['$scope', 'baOnboardingModel', ($scope, baOnboardingModel) => {
			$scope.model = baOnboardingModel
			$scope.model.setup()
		}],
		templateUrl: '/js/pages/ba-onboarding/template.html'
	}
}])