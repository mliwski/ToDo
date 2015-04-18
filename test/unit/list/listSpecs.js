(function() {
    'use strict';

    /* Authentication Module Mock*/
    angular.module('authenticationModule', [])
        .factory('Token', [function(){
            return {
                get: function(){},
                save: function(){},
                delete: function(){}
            };
        }]);


    /* jasmine specs for lists controllers go here */
    describe('List Controller', function() {
        var scope = {};
        var listServiceMock = {get:function(){}};

        beforeEach(function(){
            module('listModule');
        });

        beforeEach(inject(function ($compile, $rootScope, $q) {
            scope = $rootScope.$new();
            spyOn(listServiceMock, "get").and.returnValue($q.when([{'name': 'X'},{'name': 'Y'}]));
        }));

        it('Should startup lists with empty set', inject(function($controller) {
            $controller('ListController', {$scope:scope, List: listServiceMock});
            expect(scope.lists.length).toBe(0);
        }));

        it('Should bind 2 lists from service to scope', inject(function($controller) {
            $controller('ListController', {$scope:scope, List: listServiceMock});
            scope.$digest();
            expect(scope.lists.length).toBe(2);
        }));
    });
})();
