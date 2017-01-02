const gulp = require('gulp');
const del = require('del');

module.exports = gulp.task('clean', del.bind(null, ['.tmp', 'dist', 'test/data', 'test/scripts']));
