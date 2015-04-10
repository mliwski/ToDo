module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'src/libs/bower_components/angular/angular.js',
            'src/libs/bower_components/angular-mocks/angular-mocks.js',
            'src/libs/bower_components/angular-route/angular-route.js',
            'src/libs/utils/utils.js',
            'src/libs/bower_components/angular-http-auth/src/http-auth-interceptor.js',
            'src/libs/bower_components/ngstorage/ngStorage.js',
            'src/app.js',
            'src/components/*/*Module.js',
            'src/components/**/*.js',
            'test/unit/**/*.js'
        ],

        colors : true,
        singleRun : true,
        autoWatch: false,

        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        plugins: ['karma-phantomjs-launcher', 'karma-jasmine']
    });
};