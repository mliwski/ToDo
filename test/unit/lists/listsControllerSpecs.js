'use strict';

// Mocked Service
angular.module('listMockServiceModule', []).
    factory('listMockService', function($q) {
        return {
            get : function() {
                return $q.when([
                    {'name': 'X'},
                    {'name': 'Y'}
                ]);
            }}}
);

/* jasmine specs for lists controllers go here */
describe('List Controller', function() {
	var scope = {};
	
    beforeEach(module('todoApp'));
    beforeEach(module('listMockServiceModule'));
	beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
    }));

    it('Should startup lists with empty set', inject(function($controller,_listMockService_) {
        var ctrl = $controller('ListController', {$scope:scope, 'List':_listMockService_});

        expect(scope.lists.length).toBe(0);
    }));

    it('Should bind 2 lists from service to scope', inject(function($controller,_listMockService_) {
        var ctrl = $controller('ListController', {$scope:scope, 'List':_listMockService_});
        scope.$digest();
        expect(scope.lists.length).toBe(2);
    }));

});
