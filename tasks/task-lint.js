const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');
const reload = browserSync.reload;

function lint(files, options) {
  return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

exports.default = gulp.task('lint', () => {
  return lint('app/scripts/**/*.js', {
    fix: true,
    ecmaFeatures: {
      modules: true,
      spread : true,
      restParams : true
    },
    env : {
      browser : true,
      node : true,
      es6 : true
    },
    rules : {
      'no-unused-vars' : 2,
      'no-undef' : 2
    },
      parserOptions: {
      sourceType: 'module'
    }
  })
  .pipe(gulp.dest('app/scripts'));
});
