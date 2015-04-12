(function() {
    'use strict';

    /* Authentication Services */
    angular.module('authenticationModule')
        .factory('AuthenticationService', ['$rootScope', '$window', 'Token', function($rootScope, $window, Token){
            var authenticationService = {
                getAuthenticationLink: function() {
                    var config = $rootScope.config.googleapis;
                    return config.auth_uri + '?scope=' + config.scope + '&redirect_uri=' + config.redirect_uri + '&response_type=' + config.response_type + '&client_id=' + config.clientId;
                },
                login: function(){
                    $window.location.href = authenticationService.getAuthenticationLink();
                },
                logout: function() {
                    Token.delete();
                    $rootScope.loggedIn = false;
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