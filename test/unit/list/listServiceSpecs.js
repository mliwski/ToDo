(function() {
    'use strict';

    /* jasmine specs for lists services go here */
    describe('List Service', function() {
        var scope = {};
        var configMock = {"googleapis": {"base_uri": "http://base_uri"}};
        var parseServiceMock = function(){this.pathToJson = function () {return {};};};
        var tokenMock = function(){return {get: function(){},save: function(){},delete: function(){}};};


        beforeEach(function(){
            module('listModule');

            module(function($provide) {
                $provide.constant('config', configMock);
                $provide.service('ParseService', parseServiceMock);
                $provide.factory('Token', tokenMock);
            });

            inject(function ($rootScope) {
                scope = $rootScope.$new();
            });
        });

        it('Should startup lists with empty set', inject(function(List, $httpBackend) {
            $httpBackend.when('GET', 'http://base_uri/tasks/v1/users/@me/lists')
                .respond({items:[{userId: 'userX'}, {'A-Token': 'xxx'}]});

            List.get().then(function(items){
                expect(items.length).toBe(2);
            });
            $httpBackend.flush();
        }));
    });
})();
