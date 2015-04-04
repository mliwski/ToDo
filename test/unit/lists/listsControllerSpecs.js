'use strict';

// Mocked Service
angular.module('listServiceModuleMock', []).
    factory('listServiceMock', function($q) {
        return {
            get : function() {
                console.log("Mocked get")
                var mockUser = [
                    {'name': 'X'},
                    {'name': 'Y'}
                ];
                return $q.when(mockUser,function(){ console.log("Llamo al callback"); return mockUser},
                    function(){ console.log("Llamo al callback"); return mockUser},
                    function(){ console.log("Llamo al callback"); return mockUser});
            }}}
);

/* jasmine specs for lists controllers go here */
describe('List Controller', function() {
	var scope = {};
	
    beforeEach(module('todoApp'));
    beforeEach(module('listServiceModuleMock'));
	beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();
    }));




    it('should create 3 list', inject(function($controller,_listServiceMock_,$rootScope) {
        var ctrl = $controller('ListController', {$scope:scope, 'List':_listServiceMock_});

		scope.$digest();
		
        expect(scope.lists.length).toBe(2);
    }));

});
