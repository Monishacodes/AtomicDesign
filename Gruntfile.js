module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.scss'],
                tasks: ['sass:dev']
            },
            options: {
                livereload: true,
            },
        },
        sass: {
            options: {
                sourcemap: false,
                precision: 8,
                lineNumbers: true
            },
            dev: {
                files: [{
                    expand: 'expanded',
                    check: false,
                    update: false,
                    cwd: './src/Components',
                    src: ['*.scss'],
                    dest: './css',
                    ext: '.css'
                }]
            }
        },
		 kss: {
			options: {
			  verbose: true
			},
			dist: {
			  src: ['css/style.css'],
			  dest: ['styleguide/style.css']
			}
          }	,	
          cssmin: {
            options: {
              mergeIntoShorthands: false,
              roundingPrecision: -1
            },
            target: {
              files: {
                'dist/css/style.min.css': 'css/style.css'
              }
            }
          }
    });
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');	
    grunt.loadNpmTasks('grunt-kss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
};