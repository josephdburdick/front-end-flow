const gulp = require('gulp');
const runSequence = require('run-sequence');

module.exports = gulp.task('default', () => {
  runSequence(['clean', 'wiredep'], 'build');
});
