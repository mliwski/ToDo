module.exports = function(grunt) {

	var config = grunt.file.readJSON('config.json');
	var pkg = grunt.file.readJSON('package.json');

    // Project configuration.
    grunt.initConfig({
		replace: {
            config: {
                src: ['src/index.html'],
                dest: 'build/index.html',
                replacements: [{
                    from: '==%%CLIENT_ID%%==',
                    to: config.clientId
                }]
            }
        },
		connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 80,
                    base: 'build',
                    keepalive: true,
                    livereload: true,
					open: true
                }
            }
        },
        watch: {
			options: {
				livereload: 80,
			},
			html: {
				files: ['src/*.html'],
				tasks: ['replace'],
			}
        }
    });
	
	grunt.registerTask('project_banner', 'Log project banner', function() {
		grunt.log.writeln("");
		grunt.log.writeln(" ########################");
		grunt.log.writeln(" #	" + pkg.name + " V" + pkg.version + "	#");
		grunt.log.writeln(" ########################");
	});

    grunt.loadNpmTasks('grunt-text-replace');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['project_banner', 'replace', 'connect', 'watch']);
};