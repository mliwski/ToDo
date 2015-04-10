'use strict';

// Declare list module
angular.module('authenticationModule', ['http-auth-interceptor'])
    .run(['$rootScope','$location', 'ParseService', 'Token', 'config', function($rootScope, $location, ParseService, Token, config) {

        $rootScope.$on('event:auth-loginConfirmed', function(event, data){
            /*$rootScope.isLoggedin = true;
             $log.log(data)*/
        });

        $rootScope.$on('event:auth-loginRequired', function(event, data){
            //Redirect to google auth
            /*$rootScope.isLoggedin = true;
            $log.log(data)*/
        });

        var init = function() {
            var isAuthenticationCallback = $location.path().indexOf('token') != -1;
            if(isAuthenticationCallback) {
                var authInfo = ParseService.pathToJson($location.path());
                Token.save(authInfo);
            }
        }

        init();

    }]);