/**
 * Created by Di Wang on 2019-03-30.
 */
const fs = require('fs');
const path = require('path');

const LIB_INPUT_DIR = path.resolve(__dirname, '../lib');

function generateCssJs(filename, path) {
  const content = fs.readFileSync(path + '/index.js', { encoding: 'utf-8' });
  const cssContent = content.replace('.scss', '.css');
  fs.writeFile(path + '/css.js', cssContent, (err, cb) => {
    if (err) {
      throw err;
    }
    console.log(`write ${filename} css successful`);
  });
}

function getFolderList(path) {
  const files = fs.readdirSync(path);
  files.forEach(function(file) {
    const folderPath = path + '/' + file + '/style';
    if (fs.existsSync(folderPath)) {
      generateCssJs(file, folderPath);
    }
  });
}

(function main() {
  getFolderList(LIB_INPUT_DIR);
})();
