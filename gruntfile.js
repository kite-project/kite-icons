/*global module*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    webfont: {
      files: {
        src: 'src/*.svg',
        dest: '.',
        destCss: 'out',
        options: {
          font: 'kite-icons',
          types: 'ttf',
          ligatures: true,
          hashes: false,
          autoHint: false,
          htmlDemo: false
        }
      }
    },

    clean: {
      files: 'out'
    }
  });

  grunt.loadNpmTasks('grunt-webfont');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('default', [
    'webfont:files',
    'clean:files'
  ]);
};
