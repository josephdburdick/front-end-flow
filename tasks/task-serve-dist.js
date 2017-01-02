const gulp = require('gulp');
const browserSync = require('browser-sync');

module.exports = gulp.task('serve:dist', () => {
  browserSync({
    notify: false,
    port: 3000,
    server: {
      baseDir: ['dist']
    }
  });
});
