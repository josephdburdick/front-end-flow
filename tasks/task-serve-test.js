const gulp = require('gulp');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

module.exports = gulp.task('serve:test', ['templates', 'styles','bundle:data'], () => {
  browserSync({
    notify: false,
    port: 3000,
    ui: false,
    server: {
      baseDir: ['test'],
      routes: {
        '/images': 'app/images',
        '/styles': '.tmp/styles',
        '/scripts': '.tmp/scripts',
        '/data': 'test/data',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('app/scripts/**/*.js', ['bundle']);
  gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});
