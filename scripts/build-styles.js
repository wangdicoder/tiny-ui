const fs = require('fs');
const path = require('path');
const sass = require('sass');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');

const ROOT = path.resolve(__dirname, '..');
const COMPONENTS = path.join(ROOT, 'components');
const DIST_STYLES = path.join(ROOT, 'dist/styles');
const ES_DIR = path.join(ROOT, 'es');
const LIB_DIR = path.join(ROOT, 'lib');

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

async function processWithPostcss(css) {
  const result = await postcss([autoprefixer]).process(css, { from: undefined });
  return result.css;
}

// 1. Full CSS bundle: components/style/index.scss → dist/styles/index.css + index.min.css
async function buildFullBundle() {
  const result = sass.compile(path.join(COMPONENTS, 'style/index.scss'), {
    loadPaths: [COMPONENTS],
  });
  const css = await processWithPostcss(result.css);

  mkdirp(DIST_STYLES);
  fs.writeFileSync(path.join(DIST_STYLES, 'index.css'), css);

  // Minified version using sass compressed style
  const minResult = sass.compile(path.join(COMPONENTS, 'style/index.scss'), {
    loadPaths: [COMPONENTS],
    style: 'compressed',
  });
  const minCss = await processWithPostcss(minResult.css);
  fs.writeFileSync(path.join(DIST_STYLES, 'index.min.css'), minCss);

  console.log('  dist/styles/index.css + index.min.css');
}

// 2. Base CSS: components/style/base.scss → es/style/base.css + lib/style/base.css
async function buildBaseCss() {
  const result = sass.compile(path.join(COMPONENTS, 'style/base.scss'), {
    loadPaths: [COMPONENTS],
  });
  const css = await processWithPostcss(result.css);

  for (const dir of [ES_DIR, LIB_DIR]) {
    const outDir = path.join(dir, 'style');
    mkdirp(outDir);
    fs.writeFileSync(path.join(outDir, 'base.css'), css);
  }
  console.log('  es/style/base.css + lib/style/base.css');
}

// 3. Per-component CSS: compile each component's _index.scss partial
async function buildComponentCss() {
  const entries = fs.readdirSync(COMPONENTS, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'style' || entry.name.startsWith('_')) continue;

    const styleDir = path.join(COMPONENTS, entry.name, 'style');
    const partialPath = path.join(styleDir, '_index.scss');
    const directPath = path.join(styleDir, 'index.scss');

    let css;
    if (fs.existsSync(partialPath)) {
      // Sass partial: compile via @use
      const result = sass.compileString("@use 'index';", {
        loadPaths: [styleDir, COMPONENTS],
      });
      css = await processWithPostcss(result.css);
    } else if (fs.existsSync(directPath)) {
      // Direct scss file (e.g. tabs)
      const result = sass.compile(directPath, {
        loadPaths: [COMPONENTS],
      });
      css = await processWithPostcss(result.css);
    } else {
      continue;
    }

    for (const dir of [ES_DIR, LIB_DIR]) {
      const outDir = path.join(dir, entry.name, 'style');
      mkdirp(outDir);
      fs.writeFileSync(path.join(outDir, 'index.css'), css);
    }
    count++;
  }
  console.log(`  ${count} component CSS files compiled`);
}

// 4. Copy SCSS sources to es/ and lib/
function copyScss() {
  // Copy components/style/** to es/style/ and lib/style/
  copyDirRecursive(path.join(COMPONENTS, 'style'), path.join(ES_DIR, 'style'));
  copyDirRecursive(path.join(COMPONENTS, 'style'), path.join(LIB_DIR, 'style'));

  // Copy per-component style/*.scss to es/ and lib/
  const entries = fs.readdirSync(COMPONENTS, { withFileTypes: true });
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === 'style' || entry.name.startsWith('_')) continue;

    const styleDir = path.join(COMPONENTS, entry.name, 'style');
    if (!fs.existsSync(styleDir)) continue;

    const scssFiles = fs.readdirSync(styleDir).filter((f) => f.endsWith('.scss'));
    for (const file of scssFiles) {
      for (const dir of [ES_DIR, LIB_DIR]) {
        const outDir = path.join(dir, entry.name, 'style');
        mkdirp(outDir);
        fs.copyFileSync(path.join(styleDir, file), path.join(outDir, file));
      }
    }
  }
  console.log('  SCSS sources copied to es/ and lib/');
}

// 5. Copy fonts to dist/styles/fonts/
function copyFonts() {
  const fontsDir = path.join(COMPONENTS, 'style/fonts');
  if (!fs.existsSync(fontsDir)) return;

  const outDir = path.join(DIST_STYLES, 'fonts');
  mkdirp(outDir);

  for (const file of fs.readdirSync(fontsDir)) {
    fs.copyFileSync(path.join(fontsDir, file), path.join(outDir, file));
  }
  console.log('  dist/styles/fonts/ copied');
}

function copyDirRecursive(src, dest) {
  mkdirp(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main() {
  console.log('Building styles...\n');
  await Promise.all([buildFullBundle(), buildBaseCss(), buildComponentCss()]);
  copyScss();
  copyFonts();
  console.log('\nStyles done.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
