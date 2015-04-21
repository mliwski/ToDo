(function() {
    'use strict';

    /* Authentication Services */
    angular.module('authenticationModule')
        .factory('AuthenticationService', ['config', '$window', 'Token', function(config, $window, Token){
            var authenticationService = {
                getAuthenticationLink: function() {
                    return config.googleapis.auth_uri + '?scope=' + config.googleapis.scope + '&redirect_uri=' + config.googleapis.redirect_uri + '&response_type=' + config.googleapis.response_type + '&client_id=' + config.googleapis.clientId;
                },
                login: function(){
                    $window.location.href = authenticationService.getAuthenticationLink();
                },
                logout: function() {
                    Token.delete();
                }
            };
            return authenticationService;
        }])
        .factory('Token', ['$localStorage', function($localStorage){
            return {
                get: function(){
                    return $localStorage.access_token;
                },
                save: function(authInfo){
                    $localStorage.access_token = authInfo.access_token;
                },
                delete: function(){
                    delete $localStorage.access_token;
                }
            };
        }]);
})();