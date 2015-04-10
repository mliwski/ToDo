'use strict';

/* ToDo List Controller */

angular.module('authenticationModule')
    .controller('AuthenticationController', ['$scope', 'AuthenticationService', function($scope, AuthenticationService) {
        $scope.authenticationLink = "";

        $scope.logout = function() {
            AuthenticationService.logout();
        };

        var init = function() {
            $scope.authenticationLink = AuthenticationService.getAuthenticationLink();
        };

        init();
    }]);
