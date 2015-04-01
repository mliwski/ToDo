'use strict';

/* ToDo List Controller */

var todoApp = angular.module('todoApp', ['listService']);

todoApp.controller('ListController', ['$scope','List', function($scope, List) {
    console.log("Inside Controller")
    List.get().then(function(lists){
        console.log("Inside response " + JSON.stringify(lists));
        $scope.lists = lists;
    }),function(err){console.log("Error: " + err)};
    $scope.lists = [];
}]);
