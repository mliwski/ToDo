module.exports = function(grunt) {

	var config = grunt.file.readJSON('config.json');
	console.log("ACA" + config);
	console.log(config.clientId);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
			configuration: grunt.file.readJSON('config.json'),
            config: {
                src: ['src/index.html'],
                dest: 'build/index.html',
                replacements: [{
                    from: '==%%CLIENT_ID%%==',
                    to: config.clientId
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-text-replace');

    // Default task(s).
    grunt.registerTask('default', ['replace']);
};