(function() {
    'use strict';

    /* List Controllers */
    angular.module('listModule')
        .controller('ListController', ['$scope', 'List', function ($scope, List) {
            $scope.lists = [];

            List.get().then(function (lists) {
                $scope.lists = lists;
            });
        }]);
})();
