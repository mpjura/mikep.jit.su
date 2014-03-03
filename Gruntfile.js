module.exports = function( grunt ) {

  grunt.initConfig({

    less: {
      development: {
        files: {
          "public/css/main.css": "public/css/main.less"
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', ['less'] );

};