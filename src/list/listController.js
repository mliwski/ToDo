'use strict';

/* ToDo List Controller */

var todoApp = angular.module('todoApp', ['listService']);

todoApp.controller('ListController', ['$scope','List', function($scope, List) {
	$scope.lists = [];

    List.get().then(function(lists){
        $scope.lists = lists;
    });
}]);
