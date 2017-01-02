const gulp = require('gulp');
const config = require('../config');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const reload = browserSync.reload;

function requireUncached( $module ) {
  delete require.cache[require.resolve( $module )];
  return require( $module );
}

module.exports = gulp.task('templates', ['data'], () => {
  return gulp.src(['app/templates/*.njk', '!app/templates/layout/layout.njk'])
    .pipe($.data((file) => {
      const templateData = Object.assign(
        {},
        requireUncached('../.tmp/data/global.js').default,
        requireUncached(config.getFilePath(file)).default
      );
      return templateData;
    }))
    .pipe($.nunjucks.compile())
    .pipe($.rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('.tmp/'))
    .pipe(reload({ stream: true }));
});
