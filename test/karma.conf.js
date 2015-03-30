module.exports = function (config) {
    config.set({
        basePath: '../',
        files: [
            'src/libs/bower_components/angular/angular.js',
            'src/libs/bower_components/angular-mocks/angular-mocks.js',
            'src/lists/*.js',
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