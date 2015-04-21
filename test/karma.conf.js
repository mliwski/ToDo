module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'src/libs/bower_components/angular/angular.js',
            'src/libs/bower_components/angular-mocks/angular-mocks.js',
            'src/libs/bower_components/angular-route/angular-route.js',
            'src/libs/bower_components/angular-http-auth/src/http-auth-interceptor.js',
            'src/libs/bower_components/ngstorage/ngStorage.js',
            'src/libs/utils/utils.js',
            'src/app.js',
            'src/components/**/*Module.js',
            'src/components/**/*.js',
            'test/unit/**/*.js'
        ],

        reporters : ['coverage'],
        coverageReporter : {
            type : 'text-summary',
            dir : 'coverage/'
        },
        preprocessors : {
            'src/app.js': 'coverage',
            'src/components/**/*.js': 'coverage',
            'src/libs/utils/utils.js': 'coverage'
        },

        colors : true,
        singleRun : true,
        autoWatch: false,

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        plugins: ['karma-phantomjs-launcher', 'karma-jasmine', 'karma-coverage']
    });
};