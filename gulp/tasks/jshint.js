var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp   = require('gulp');
var config = require('../config').jshint;

gulp.task('jshint', function() {
  return gulp.src(config.src)
    .pipe(jshint({
      linter: require('jshint-jsx').JSXHINT,
      esnext: true
    }))
    .pipe(jshint.reporter('jshint-stylish'));
});
