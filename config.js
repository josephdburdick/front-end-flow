const path = require('path');

const C = (() => {
  this.path = {
    root: '.',
    entry: './app/scripts/index.js',
    src: 'app',
    dist: 'dist',
    tmp: '.tmp',
    tmpData: '.tmp/data',
    data: 'app/data'
  };
  this.getFileType = (file) => path.basename(file.path).split('.').pop();
  this.getFileName = (file) => {
    let filePath = path.basename(file.path).split('.');
    filePath.pop();
    filePath.push('js');
    return filePath.join('.');
  };
  this.getFilePath = (file) => `${__dirname}/${C.path.tmpData}/templates/${this.getFileName(file)}`;
  return this;
})();
