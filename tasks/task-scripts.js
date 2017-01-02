const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

module.exports = gulp.task('scripts', ['bundle'], () => {
  return gulp.src(`./${config.path.app}/scripts/**/*.js`)
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(reload({stream: true}));
});
