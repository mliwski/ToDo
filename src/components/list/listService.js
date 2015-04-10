angular.module('listModule')
    .factory('List', ['$rootScope', '$http', 'Token', function($rootScope, $http, Token){
        var config = $rootScope.config;
        return {
            get: function(){
                var request = {
                    method: 'GET',
                    url: 'https://www.googleapis.com/tasks/v1/users/@me/lists',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Token.get()
                    }
                };

                return $http(request).then(function(response){
                    return response.data.items;
                });
            }
        }
    }]);