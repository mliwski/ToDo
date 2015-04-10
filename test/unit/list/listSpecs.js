'use strict';

/* jasmine specs for lists controllers go here */
describe('List Controller', function() {
	var scope = {};
    var listServiceMock = {get:function(){}};

    beforeEach(module('listModule'));
    //beforeEach(module('todoApp'));

	beforeEach(inject(function ($compile, $rootScope, $q) {
        scope = $rootScope.$new();
        spyOn(listServiceMock, "get").and.returnValue($q.when([{'name': 'X'},{'name': 'Y'}]));
    }));

    it('Should startup lists with empty set', inject(function($controller) {
        var ctrl = $controller('ListController', {$scope:scope});

        expect(scope.lists.length).toBe(0);
    }));

    it('Should bind 2 lists from service to scope', inject(function($controller) {
        var ctrl = $controller('ListController', {$scope:scope, List: listServiceMock});
        scope.$digest();
        expect(scope.lists.length).toBe(2);
    }));
});