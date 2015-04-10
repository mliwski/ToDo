'use strict';

// Declare app level module which depends on views, and components
angular.module('todoApp', ['ngRoute' , 'ngTodoUtils', 'ngStorage', 'listModule', 'authenticationModule'])
    .constant('config',
        {
            'clientId': '364497781357-mdeekpgeb2bso2acdjs1oe0aa7tep448.apps.googleusercontent.com',
            'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
            'redirect_uri': 'http://localhost',
            'scope': 'email https://www.googleapis.com/auth/tasks',
            'response_type': 'token'
        }
    )
    .run(['$rootScope','$location','config', function($rootScope, $location, config) {
        $rootScope.config = config;
    }]);