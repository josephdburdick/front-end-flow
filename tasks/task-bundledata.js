const gulp = require('gulp');
const nodeResolve = require('rollup-plugin-node-resolve');
const buffer = require('vinyl-buffer');

exports.default = gulp.task('bundle:data', ['data'], () => {
  return rollup({
    entry: `${__dirname}/.tmp/data/global.js`,
    sourceMap: false,
    plugins: [
      nodeResolve({
        jsnext: true
      })
    ]
  })
  .pipe($.plumber({errorHandler: $.notify.onError('Error: <%= error.message %>')}))
  .pipe(source('global.js', `${__dirname}/.tmp/data`))
  .pipe(buffer())
  .pipe($.sourcemaps.init({loadMaps: true}))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('./test/data'));
});
