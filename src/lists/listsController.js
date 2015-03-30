'use strict';

/* ToDo Lists Controllers */

var todoApp = angular.module('ToDoApp', []);

todoApp.controller('ToDoListsController', function($scope) {
    $scope.todoLists = [
        {'name': '20%'},
        {'name': 'X'},
        {'name': 'Y'}
    ];
});
