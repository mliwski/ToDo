/* Based on http://www.developerdrive.com/2013/08/turning-the-querystring-into-a-json-object-using-javascript/ */
'use strict';

(function() {
    angular.module('ngTodoUtils', [])
        .service('ParseService', [ function(){
            this.pathToJson = function (path) {
                var toSlice = path.indexOf('/') == 0 ? 1 : 0;
                var pairs = path.slice(toSlice).split('&');

                var result = {};
                pairs.forEach(function(pair) {
                    pair = pair.split('=');
                    result[pair[0]] = decodeURIComponent(pair[1] || '');
                });

                return JSON.parse(JSON.stringify(result));
            };
        }]);
})();