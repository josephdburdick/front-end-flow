const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = gulp.task('images', () => {
  return gulp.src('app/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});
