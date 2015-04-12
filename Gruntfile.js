module.exports = function(grunt) {

    var pkg = grunt.file.readJSON('package.json');

    // Project configuration.
    grunt.initConfig({
        copy: {
            dist : { nonull: true, expand: true, cwd: "src", src: ['**/**'], dest: 'dist/', timestamp: true},
            dev : { nonull: true, expand: true, cwd: "src", src: ['**/**'], dest: 'tmp/', timestamp: true}
        },
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 80,
                    base: 'tmp',
                    keepalive: false,
                    livereload: true,
                    open: true,
                    debug: false
                }
            }
        },
        watch: {
            html: {
                files: ['src/**/*.html', 'src/**/*.js', 'test/**/*.js'],
                tasks: ['compile'],
                options: {
                    livereload: true
                }
            }
        },
        jshint: {
            options: {
                /* Enforcing options */
                bitwise: true,
                curly: true,
                eqeqeq: true,
                futurehostile: true,
                latedef: 'nofunc',
                undef: true,
                unused: true,
                /* Relaxing options */
                eqnull: true,
                /* Environments options */
                browser: true,
                jasmine: true,
                globals: {
                    angular: true,
                    module: true,
                    console: true,
                    inject: true
                },
                ignores: ['src/libs/**/*.js']
            },
            config: ['Gruntfile.js'],
            src: ['src/**/*.js'],
            test: ['test/**/*.js']
        },
        karma: {
            unit: {
                configFile: 'test/karma.conf.js'
            }
        }
    });

    grunt.registerTask('project_banner_task', 'Print project banner', function() {
        grunt.log.writeln("");
        grunt.log.writeln(" ########################");
        grunt.log.writeln(" #	" + pkg.name + " V" + pkg.version + "	#");
        grunt.log.writeln(" ########################");
    });

    grunt.registerTask('help_task', 'print help options', function() {
        grunt.log.writeln(" Grunt commands:");
        grunt.log.writeln(" * help : Print this options");
        grunt.log.writeln(" * dist : Run tests and build distributable files");
        grunt.log.writeln(" * compile : Run tests and then build dev on tmp folder");
        grunt.log.writeln(" * dev : Compile and startup a dev server");
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    // Default task(s).
    grunt.registerTask('default', ['help']);
    grunt.registerTask('help', ['project_banner_task', 'help_task']);

    grunt.registerTask('compile', ['jshint', 'karma:unit', 'copy:dev']);
    grunt.registerTask('dev', ['project_banner_task', 'compile', 'connect', 'watch']);

    grunt.registerTask('dist', ['project_banner_task', 'karma:unit', 'copy:dist']);
};