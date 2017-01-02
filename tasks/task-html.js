const gulp = require('gulp');

exports.default = gulp.task('html', ['templates', 'styles', 'bundle'], () => {
  return gulp.src('.tmp/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'app', '.']}))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.css', $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if('*.html', $.htmlmin({collapseWhitespace: false})))
    .pipe(gulp.dest('dist'));
});
