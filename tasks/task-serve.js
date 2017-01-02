const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const runSequence = require('run-sequence');

module.exports = gulp.task('serve', () => {
  runSequence(['clean', 'wiredep'], ['templates', 'styles', 'bundle', 'fonts'], () => {
    browserSync({
      notify: false,
      port: 3000,
      open: false,
      server: {
        baseDir: ['.tmp', 'app'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch([
      'app/*.html',
      'app/images/**/*',
      'app/data/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('app/data/**/*.js', ['templates']);
    gulp.watch('app/templates/**/*.njk', ['templates']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
    gulp.watch('app/scripts/**/*.js', ['bundle']);
    gulp.watch('app/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
  });
});
