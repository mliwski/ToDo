(function() {
    'use strict';

    /* jasmine specs for lists controllers go here */
    describe('List Controller', function() {
        var scope = {};
        var listMock = {get:function(){}};
        var configMock = {"googleapis": {"base_uri": "http://basce_uri"}};
        var parseServiceMock = function(){this.pathToJson = function () {return {};};};
        var tokenMock = function(){return {get: function(){},save: function(){},delete: function(){}};};


        beforeEach(function(){
            module('listModule');

            module(function($provide) {
                $provide.constant('config', configMock);
                $provide.service('ParseService', parseServiceMock);
                $provide.factory('Token', tokenMock);
                $provide.factory('List', listMock);
            });

            inject(function ($compile, $rootScope, $q) {
                scope = $rootScope.$new();
                spyOn(listMock, "get").and.returnValue($q.when([{'name': 'X'},{'name': 'Y'}]));
            });
        });

        it('Should startup lists with empty set', inject(function($controller) {
            $controller('ListController', {$scope:scope, List: listMock});
            expect(scope.lists.length).toBe(0);
        }));

        it('Should bind 2 lists from service to scope', inject(function($controller) {
            $controller('ListController', {$scope:scope, List: listMock});
            scope.$digest();
            expect(scope.lists.length).toBe(2);
        }));
    });
})();
