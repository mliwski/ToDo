(function() {
    'use strict';

    /* List Services */
    angular.module('listModule')
        .factory('List', ['config', '$http', 'Token', function (config, $http, Token) {
            return {
                get: function () {
                    var request = {
                        method: 'GET',
                        url: config.googleapis.base_uri + '/tasks/v1/users/@me/lists',
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