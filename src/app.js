'use strict';

// Declare app level module which depends on views, and components
angular.module('todoApp', [
    'ngRoute',
    'ListService'
])
    .constant('config',
        {
            'clientId' : '364497781357-mdeekpgeb2bso2acdjs1oe0aa7tep448.apps.googleusercontent.com'
        }
    )
    .run(['$rootScope','config', function($rootScope,config) {
        $rootScope.config = config;
    }]);