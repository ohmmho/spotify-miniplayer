'use strict';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
          options: {
            mangle: false,
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
          },

        processhtml: {
          dist: {
            options: {
              process: true,
              data: {
                title: 'Spotify-miniplayer',
                message: 'This is production distribution'
              }
            },
            files: {
              'build/index.html': ['index.html']
            }
          }
        },

          my_target: {
            files: {
              'build/application.js': ['src/javascript/*.js']
            }
          }
        },
        sass: {
          dist: {
            files: {
             'build/styles.css':'src/styles/main.scss'
            }
          }
        },

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            } 
        },
        copy: {
          main: {
            src: 'src/styles/*.css',
            dest: 'build/styles.css',
          }
        },

        'gh-pages': {
            options: {
                base: 'build'
            },
            src: ['**']
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
      grunt.loadNpmTasks('grunt-contrib-sass');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-processhtml');
      grunt.loadNpmTasks('grunt-contrib-copy');
      grunt.loadNpmTasks('grunt-gh-pages'); 



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('default', ['uglify', 'sass', 'copy', 'processhtml']);

};