(function() {
    'use strict';

    /* List Services */
    angular.module('listModule')
        .factory('List', ['$rootScope', '$http', 'Token', function ($rootScope, $http, Token) {
            var config = $rootScope.config.googleapis;
            return {
                get: function () {
                    var request = {
                        method: 'GET',
                        url: config.base_uri + '/tasks/v1/users/@me/lists',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + Token.get()
                        }
                    };

                    return $http(request).then(function (response) {
                        return response.data.items;
                    });
                }
            };
        }]);
})();