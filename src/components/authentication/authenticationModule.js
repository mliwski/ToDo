'use strict';

// Declare list module
angular.module('authenticationModule', ['http-auth-interceptor'])
    .run(['$rootScope','$location', 'ParseService', 'Token', 'AuthenticationService', 'config', function($rootScope, $location, ParseService, Token, AuthenticationService, config) {

        $rootScope.$on('event:auth-loginRequired', function(event, data){
            //Autoredirect to google authentication on Unauthorized
            //TODO: Add some banner to let the user know what's going on
            AuthenticationService.login();
        });

        var init = function() {
            var isAuthenticationCallback = $location.path().indexOf('token') != -1;
            if(isAuthenticationCallback) {
                var authInfo = ParseService.pathToJson($location.path());
                Token.save(authInfo);
                $location.path('');
            }

            $rootScope.loggedIn = Token.get() != undefined;
        }

        init();
    }]);