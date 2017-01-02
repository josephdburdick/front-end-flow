const gulp = require('gulp');

module.exports = gulp.task('extras', () => {
  return gulp.src([
    'app/*',
    '!data',
    '!app/*.html',
    '!app/templates/*.mustache',
    '!app/**/*.mustache'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});
