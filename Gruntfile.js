

module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        //Minify Image
        imagemin: {
            dynamic: {
                files:[{
                    expand: true,
                    cwd: 'build/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img'
                }]
            }
        },


        // Watch Task
        watch: {
            files: ['build/sass/style.scss'],
            tasks: ['sass']
        },

        //SASS Task
        sass: {
            dist: { 
                files: {
                    'build/css/style.css':'build/sass/style.scss'
                }
            }
        },

        //Browser Sync Task
        browserSync: {
            bsFiles: {
                src : [
                    'build/css/style.css',
                    'build/js/main.js',
                    'build/home.html',
                    'build/about.html',
                    'build/menu.html',
                    'build/blog.html',
                    'build/contact.html',
                    'build/element.html',
                ]
            },
            options: {
                watchTask: false,
                server: './build',
                browser: ["chrome.exe"],
                open: false
                // firefox: '-browser "firefox.exe"'
            }
        },

        // Build
        concat: {
            build: {
                "src":["index.html"],
                "dest": "build/index.html"
            }
        },
        // configure jshint to validate js files -----------------------------------
        jshint: {
            options: {
            reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
            },
    
            // when this task is run, lint the Gruntfile and all js files in src
            build: ['Gruntfile.js', './**/*.js']
        },
        less: {
            build: {
              files: {
                'build/css/animate.css': './css/animate.css'
              }
            }
          }

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['browserSync','watch']);
    grunt.registerTask('build', ['less']);
    // grunt.registerTask('build', ['clean:dist', 'copy', 'imagemin', 'uglify:build', 'concat:css', 'sass:build']);

}
