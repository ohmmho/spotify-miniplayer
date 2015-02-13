'use strict';

module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


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
              'build/index.html': ['src/index.html']
            }
          }
        },

        uglify: {
          options: {
            mangle: false,
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
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
             'build/styles.css':'src/styles/styles.scss'
            }
          }
        },

        watch: {

            options: {
                livereload: true,
            },
            scripts: {
              files: ['/src/javascript/*.js'],
              tasks: ['uglify'],
              options: {
                  spawn: false,
              }
            },
            css: {
                files: 'src/styles/*.scss',
                tasks: ['sass'],
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
      grunt.loadNpmTasks('grunt-contrib-watch'); 




    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('deploy', ['gh-pages']);
  grunt.registerTask('default', ['uglify', 'sass', 'processhtml']);

};