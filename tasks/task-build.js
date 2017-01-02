const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

module.exports = gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});
