'use strict';
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');

gulp.task('browserify', function () {
  var b = browserify();
  b.transform(reactify);
  b.add('./main.js');
  return b.bundle()
         .pipe(source('main.js'))
         .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
  gulp.watch(['./main.js', './src/**/*.jsx'], ['browserify']);
});

