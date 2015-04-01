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

    beforeEach(module('todoApp'));
    beforeEach(module('listServiceModuleMock'));



    it('should create 3 list', inject(function($controller,_listServiceMock_) {
        var scope = {};
        var ctrl = $controller('ListController', {$scope:scope, 'List':_listServiceMock_});

        expect(scope.lists.length).toBe(2);
    }));

});
