/**
 * Created by Di Wang on 2019-03-30.
 */
const fs = require('fs');
const path = require('path');

const LIB_INPUT_DIR = path.resolve(__dirname, '../lib');
const BLACK_LIST = ['styles'];

function geFileList(path) {
    const files = fs.readdirSync(path);
    files.filter(function(file) {
        return !BLACK_LIST.includes(file.toString());
    }).forEach(function(file) {
        const folderPath = path + '/' + file;
        const states = fs.statSync(folderPath);
        if (states.isDirectory()) {
            mkdir(file, folderPath);
        }
    });
}

function mkdir(filename, path) {
    const folderPath = path + '/style';
    fs.mkdir(folderPath, (err, cb) => {
        if (err) {
            throw err;
        }
        writeFile(filename, folderPath);
    });
}

function writeFile(filename, path) {
    const jsContent = `import '../../styles/components/${filename}.scss'`;
    const cssContent = `import '../../styles/components/${filename}.css'`;
    fs.writeFile(path + '/index.js', jsContent, (err, cb) => {
        if (err) {
            throw err;
        }
        console.log(`write ${filename} scss successful`);
    });
    fs.writeFile(path + '/css.js', cssContent, (err, cb) => {
        if (err) {
            throw err;
        }
        console.log(`write ${filename} css successful`);
    });
}

(function main() {
    geFileList(LIB_INPUT_DIR);
})();
