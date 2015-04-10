angular.module('authenticationModule')
    .factory('AuthenticationService', ['$rootScope', 'Token', function($rootScope, Token){
        return {
            getAuthenticationLink: function() {
                var config = $rootScope.config;
                return config.auth_uri + '?scope=' + config.scope + '&redirect_uri=' + config.redirect_uri + '&response_type=' + config.response_type + '&client_id=' + config.clientId;
            },
            logout: function() {
                Token.delete();
            }
        }
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
        }
    }]);