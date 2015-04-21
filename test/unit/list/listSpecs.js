(function() {
    'use strict';

    /* Authentication Module Mock*/
    angular.module('authenticationModule', [])
        .factory('Token', [function(){
            return {
                get: function(){return 'A_TOKEN';},
                save: function(){},
                delete: function(){}
            };
        }]);

    /* Config Module Mock*/
    angular.module('configModule', [])
        .constant('config', {
            "googleapis": {
                "base_uri": "http://base_uri"
            }
        });


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

    /* jasmine specs for lists services go here */
    describe('List Service', function() {
        var scope = {};
        var $httpBackend = {};
        var List = {};

        beforeEach(function() {
            module('listModule');

            inject(function ($injector, $rootScope) {
                $httpBackend = $injector.get('' +
                    '');
                scope = $rootScope.$new();
            });
/*
            inject(function (_List_) {
                List = _List_;

            });*/
        });

        it('Should startup lists with empty set', inject(function(List, $httpBackend) {
            $httpBackend.when('GET', 'http://base_uri/tasks/v1/users/@me/lists')
                .respond({items:[{userId: 'userX'}, {'A-Token': 'xxx'}]});
            //$httpBackend.expectGET('http://base_uri/tasks/v1/users/@me/lists');

            List.get().then(function(response){console.log(response);});
            $httpBackend.flush();
        }));
    });
})();
