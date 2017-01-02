const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = gulp.task('deploy', () => {
  return gulp.src('./dist/**/*')
    .pipe($.ghPages());
});
