const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const config = require('../config');
const rollup = require('rollup-stream');
const source = require('vinyl-source-stream');
const nodeResolve = require('rollup-plugin-node-resolve');
const buffer = require('vinyl-buffer');

exports.data = gulp.task('bundle', () => {
  return rollup({
      entry: config.path.entry,
      sourceMap: false,
      plugins: [
        nodeResolve({
          jsnext: true
        })
      ]
    })
    .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
    .pipe(source('index.js', './app/scripts'))
    .pipe(buffer())
    .pipe($.sourcemaps.init({loadMaps: true}))
    .pipe($.rename('main.js'))
    .pipe($.babel())
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('./test/scripts'))
    .pipe(gulp.dest('./.tmp/scripts'));
});
