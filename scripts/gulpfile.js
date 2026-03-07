const path = require('path');
const { series, parallel, src, dest } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoPrefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const cleanCss = require('gulp-clean-css');
const merge = require('merge-stream');

const SOURCE_PATH = path.resolve(__dirname, '../components');
const DIST_PATH = path.resolve(__dirname, '../dist/styles');
const MODULARIZED_DIST_PATH = path.resolve(__dirname, '../lib');

function buildScss() {
  return src(`${SOURCE_PATH}/style/index.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoPrefixer()]))
    .pipe(sourcemaps.write('./'))
    .pipe(dest(DIST_PATH));
}

function minCss() {
  return src(`${DIST_PATH}/index.css`)
    .pipe(sourcemaps.init())
    .pipe(cleanCss())
    .pipe(
      rename((path) => {
        path.basename += '.min';
      })
    )
    .pipe(sourcemaps.write('./'))
    .pipe(dest(`${DIST_PATH}`));
}

function copyFont() {
  return src(`${SOURCE_PATH}/style/fonts/*`).pipe(dest(`${DIST_PATH}/fonts`));
}

function generateModularizedStyles() {
  const scssFiles = src(`${SOURCE_PATH}/*/style/*.scss`).pipe(dest(`${MODULARIZED_DIST_PATH}`));
  const styleDir = src(`${SOURCE_PATH}/style/**`).pipe(dest(`${MODULARIZED_DIST_PATH}/style`));
  const cssFiles = src(`${SOURCE_PATH}/**/*.scss`)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoPrefixer()]))
    .pipe(dest(`${MODULARIZED_DIST_PATH}`));

  return merge(scssFiles, styleDir, cssFiles);
}

exports.default = parallel(series(buildScss, minCss, generateModularizedStyles), copyFont);
