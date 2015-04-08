'use strict';

/* ToDo List Controller */

angular.module('todoApp')
    .controller('ListController', ['$scope','List', function($scope, List) {
        $scope.lists = [];

        List.get().then(function(lists){
            $scope.lists = lists;
        });
    }]);
