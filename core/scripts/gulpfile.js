const { series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleancss = require('gulp-clean-css');

sass.compiler = require('node-sass');

const SOURCE_PATH = '../themes';
const DIST_PATH = '../dist/styles';
const MODULARIZED_DIST_PATH = '../lib/styles';

function build_scss() {
    return src(`${SOURCE_PATH}/index.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(DIST_PATH));
}

function min_css() {
    return src(`${DIST_PATH}/index.css`)
    .pipe(sourcemaps.init())
    .pipe(cleancss())
    .pipe(rename(path => {
        path.basename += '.min';
    }))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(`${DIST_PATH}`));
}

function copy_font(done) {
    src(`${SOURCE_PATH}/fonts/*`).pipe(dest(`${DIST_PATH}/fonts`));
    done();
}

function generate_modularized_styles(done) {
    // copy from themes to lib/styles folder
    src(`${SOURCE_PATH}/**`)
    .pipe(dest(`${MODULARIZED_DIST_PATH}`));

    // generate css file from scss
    src(`${SOURCE_PATH}/components/**`)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer]))
    .pipe(dest(`${MODULARIZED_DIST_PATH}/components`));
    done();
}

exports.default = parallel(
    series(build_scss, min_css, generate_modularized_styles),
    copy_font,
);
