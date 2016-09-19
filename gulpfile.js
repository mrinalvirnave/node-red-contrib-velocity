/* File: gulpfile.js */

// grab our gulp packages
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const gutil = require('gulp-util');
const exit = require('gulp-exit');
const plumber = require('gulp-plumber');
const istanbul = require('gulp-istanbul');

const path = require('path');

// create a default task and just log a message
gulp.task('default', function() {
  return gutil.log('This module cannot be run standalone. Install it with node-red (http://nodered.org).');
});

gulp.task('test', () =>
  gulp.src(path.join('test', '**', '*.js'), { read: false })
    .pipe(mocha({ reporter: 'spec', timeout: 3000 }))
    .pipe(exit())
);
