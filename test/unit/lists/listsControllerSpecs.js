'use strict';

/* jasmine specs for lists controllers go here */
describe('ToDo Lists Controller', function() {

    beforeEach(module('ToDoApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
        var scope = {},
            ctrl = $controller('ToDoListsController', {$scope:scope});

        expect(scope.todoLists.length).toBe(3);
    }));

});
