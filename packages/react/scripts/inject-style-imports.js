/**
 * Post-build script: injects CSS imports into each component's index.js
 * so that importing a component automatically loads its styles.
 *
 * For ES modules (es/):  import './style/index.css';
 * For CommonJS (lib/):   require('./style/index.css');
 *
 * Also parses each component's style/index.js to discover style dependencies
 * (e.g., Modal depends on Overlay + Button CSS) and injects those too.
 */
const fs = require('fs');
const path = require('path');

const ES_DIR = path.resolve(__dirname, '../es');
const LIB_DIR = path.resolve(__dirname, '../lib');

/**
 * Parse a component's style/index.js to extract CSS import paths.
 * Returns paths relative to the style/ directory.
 *
 * Example style/index.js content (tsdown rewrites .scss → .css):
 *   import './index.css';
 *   import '../../overlay/style/index.css';
 *
 * Returns: ['./index.css', '../../overlay/style/index.css']
 */
function parseCssDeps(cssJsPath) {
  if (!fs.existsSync(cssJsPath)) return [];

  const content = fs.readFileSync(cssJsPath, 'utf-8');
  const deps = [];

  // Match both ES import and CJS require patterns
  const importRegex = /(?:import\s+['"](.+?\.css)['"]|require\(['"](.+?\.css)['"]\))/g;
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    deps.push(match[1] || match[2]);
  }

  return deps;
}

/**
 * Transform a CSS path from style/index.js perspective to component/index.js perspective.
 *
 * style/index.js is at:  es/modal/style/index.js
 * index.js is at:        es/modal/index.js
 *
 * So paths need to go one directory level less deep:
 *   ./index.css           -> ./style/index.css
 *   ../../overlay/style/  -> ../overlay/style/
 */
function transformPath(cssPath) {
  // Normalize _index.css -> index.css (some components reference the partial name)
  cssPath = cssPath.replace(/_index\.css/, 'index.css');

  if (cssPath.startsWith('./')) {
    // ./index.css -> ./style/index.css
    return './style/' + cssPath.slice(2);
  }
  if (cssPath.startsWith('../../')) {
    // ../../overlay/style/index.css -> ../overlay/style/index.css
    return cssPath.slice(3);
  }
  if (cssPath.startsWith('../')) {
    // ../style/index.css -> ./style/index.css (same component, different path form)
    return './' + cssPath.slice(3);
  }
  return cssPath;
}

/**
 * Build the CSS import lines to prepend to a component's index.js.
 */
function buildImportLines(componentDir, format) {
  const styleJsPath = path.join(componentDir, 'style', 'index.js');
  const ownCssPath = path.join(componentDir, 'style', 'index.css');
  const deps = parseCssDeps(styleJsPath);

  const imports = [];

  // Always import base styles first (theme, normalize, animations)
  const basePath = '../style/base.css';
  if (format === 'esm') {
    imports.push(`import '${basePath}';`);
  } else {
    imports.push(`require('${basePath}');`);
  }

  if (deps.length > 0) {
    // Use parsed dependencies from style/index.js (includes own CSS + deps)
    for (const dep of deps) {
      const transformed = transformPath(dep);
      if (format === 'esm') {
        imports.push(`import '${transformed}';`);
      } else {
        imports.push(`require('${transformed}');`);
      }
    }
  } else if (fs.existsSync(ownCssPath)) {
    // Fallback: no style/index.js but has compiled CSS
    if (format === 'esm') {
      imports.push("import './style/index.css';");
    } else {
      imports.push("require('./style/index.css');");
    }
  }

  return imports;
}

/**
 * Inject CSS imports into a component's index.js file.
 */
function injectComponent(componentDir, format) {
  const indexPath = path.join(componentDir, 'index.js');
  if (!fs.existsSync(indexPath)) return false;

  const imports = buildImportLines(componentDir, format);
  if (imports.length <= 1) return false; // Only base import, no component CSS

  const content = fs.readFileSync(indexPath, 'utf-8');

  // Don't inject twice
  if (content.includes("style/index.css") || content.includes("style/base.css")) {
    return false;
  }

  const injected = imports.join('\n') + '\n' + content;
  fs.writeFileSync(indexPath, injected);
  return true;
}

/**
 * Inject base CSS import into the barrel index.js (es/index.js or lib/index.js).
 */
function injectBarrel(dir, format) {
  const indexPath = path.join(dir, 'index.js');
  if (!fs.existsSync(indexPath)) return;

  const content = fs.readFileSync(indexPath, 'utf-8');
  if (content.includes("style/base.css")) return;

  const line = format === 'esm'
    ? "import './style/base.css';\n"
    : "require('./style/base.css');\n";

  fs.writeFileSync(indexPath, line + content);
  console.log(`  injected base CSS into ${path.relative(path.resolve(__dirname, '..'), indexPath)}`);
}

function processDir(baseDir, format) {
  const entries = fs.readdirSync(baseDir, { withFileTypes: true });
  let count = 0;

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    // Skip internal dirs
    if (entry.name.startsWith('_') || entry.name === 'style' || entry.name === 'locale') continue;

    const componentDir = path.join(baseDir, entry.name);
    if (injectComponent(componentDir, format)) {
      count++;
    }
  }

  return count;
}

// Main
console.log('Injecting CSS imports into component entry files...\n');

const esCount = processDir(ES_DIR, 'esm');
injectBarrel(ES_DIR, 'esm');
console.log(`  ES modules: ${esCount} components injected`);

const libCount = processDir(LIB_DIR, 'cjs');
injectBarrel(LIB_DIR, 'cjs');
console.log(`  CommonJS:   ${libCount} components injected`);

console.log('\nDone.');
