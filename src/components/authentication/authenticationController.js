(function() {
    'use strict';

    /* Authentication Controllers */
    angular.module('authenticationModule')
        .controller('AuthenticationController', ['$rootScope', '$scope', 'AuthenticationService', function ($rootScope, $scope, AuthenticationService) {
            $scope.authenticationLink = "";

            $scope.logout = function () {
                AuthenticationService.logout();
                $rootScope.loggedIn = false;
            };

            var init = function () {
                $scope.authenticationLink = AuthenticationService.getAuthenticationLink();
            };

            init();
        }]);
})();