const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

module.exports = gulp.task('data', () => {
  return gulp.src(`${config.path.data}/**/*.js`)
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe($.babel())
    .pipe(gulp.dest(config.path.tmpData))
    .pipe(reload({stream: true}));
});
