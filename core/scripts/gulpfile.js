const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');
const fs = require('fs');
const path = require('path');

sass.compiler = require('node-sass');

const LIB_PATH = '../lib';
const SOURCE_PATH = '../themes';
const DIST_PATH = '../dist/styles';
const MODULARIZED_DIST_PATH = '../lib/styles';

function build_scss(done) {
    src(`${SOURCE_PATH}/index.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(DIST_PATH));
    done();
}

function min_css(done) {
    src(`${DIST_PATH}/index.css`)
    .pipe(sourcemaps.init())
    .pipe(cleancss())
    .pipe(rename(path => {
        path.basename += '.min';
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(`${DIST_PATH}`));
    done();
}

function copy_font(done) {
    src(`${SOURCE_PATH}/fonts/*`).pipe(dest(`${DIST_PATH}/fonts`));
    done();
}

function generate_modularized_styles(done) {

}

function move_lib_file(done) {
    src(`${LIB_PATH}/*`).pipe(dest(`${LIB_PATH}`));
    done();
}

exports.default = series(build_scss, min_css, copy_font);
// exports.default = series(move_lib_file);
