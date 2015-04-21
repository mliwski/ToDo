(function() {
    'use strict';

    /* Authentication Module */
    angular.module('authenticationModule', ['configModule', 'http-auth-interceptor'])
        .run(['$rootScope','$location', 'ParseService', 'Token', 'AuthenticationService', function($rootScope, $location, ParseService, Token, AuthenticationService) {
            $rootScope.$on('event:auth-loginRequired', function(/*event, data*/){
                //Auto redirect to google authentication on Unauthorized
                //TODO: Add some banner to let the user know what's going on
                AuthenticationService.login();
            });

            var init = function() {
                var isAuthenticationCallback = $location.path().indexOf('token') !== -1;
                if(isAuthenticationCallback) {
                    var authInfo = ParseService.pathToJson($location.path());
                    Token.save(authInfo);
                    $location.path('');
                }

                $rootScope.loggedIn = Token.get() !== undefined;
            };

            init();
        }]);
})();