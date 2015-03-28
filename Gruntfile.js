module.exports = function(grunt) {

	var config = grunt.file.readJSON('config.json');
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
				files: ['src/**/*.html'],
				tasks: ['copy:dev'],
				options: {
					livereload: true
				}
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
		grunt.log.writeln(" * dist : Build distributable files");
		grunt.log.writeln(" * dev : Build dev on tmp folder and startup a dev server");
	});

    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['help']);
	grunt.registerTask('help', ['project_banner_task', 'help_task']);
	
	grunt.registerTask('dist', ['project_banner_task', 'copy:dist']);
	grunt.registerTask('dev', ['project_banner_task', 'copy:dev', 'connect', 'watch']);
};