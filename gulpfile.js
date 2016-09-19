/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var exit = require('gulp-exit');
var plumber = require('gulp-plumber');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');

var path = require('path');


gulp.task('pre-test', function() {
  return gulp.src([path.join('velocity', 'velocity.js')])
    .pipe(istanbul({ includeUntested: true }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function(cb) {
  var mochaErr;
  gulp.src([path.join('test', 'velocity', '*.js')], { read: false })
    .pipe(plumber())
    .pipe(mocha({ reporter: 'spec', timeout: 3000 }))
    .on('error', function(err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function() {
      cb(mochaErr);
    })
    .pipe(exit());
});


gulp.task('coveralls', ['test'], function() {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('default', ['test', 'coveralls']);
