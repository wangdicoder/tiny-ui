const fs = require('fs');
const path = require('path');

const SVG_FONT_PATH = path.resolve(__dirname, '../../tokens/scss/fonts/iconfont.svg');
const SRC_DIR = path.resolve(__dirname, '../src');

function parseName(glyphName) {
  // Strip leading dash, convert to PascalCase
  const clean = glyphName.replace(/^-/, '');
  return clean
    .split(/[-_]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function toFileName(glyphName) {
  // Strip leading dash, keep kebab-case
  return glyphName.replace(/^-/, '');
}

function extractGlyphs(svgContent) {
  const glyphs = [];
  const regex = /<glyph\s+glyph-name="([^"]+)"[^>]*\sd="([^"]+)"/g;
  let match;
  while ((match = regex.exec(svgContent)) !== null) {
    const [, name, d] = match;
    if (name && d) {
      glyphs.push({ name, d });
    }
  }
  return glyphs;
}

function generateComponent(pascalName, pathData) {
  return `import { forwardRef } from 'react';
import type { IconProps } from './types';

const ${pascalName} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { size = '1em', color = 'currentColor', className, style, ...rest } = props;
  return (
    <svg
      ref={ref}
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill={color}
      className={className}
      style={style}
      {...rest}
    >
      <g transform="translate(0, 896) scale(1, -1)">
        <path d="${pathData}" />
      </g>
    </svg>
  );
});

${pascalName}.displayName = '${pascalName}';

export { ${pascalName} };
`;
}

function generateTypes() {
  return `import type { SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  size?: string | number;
  color?: string;
}
`;
}

function main() {
  const svgContent = fs.readFileSync(SVG_FONT_PATH, 'utf-8');
  const glyphs = extractGlyphs(svgContent);

  console.log(`Found ${glyphs.length} glyphs`);

  // Ensure src dir exists
  fs.mkdirSync(SRC_DIR, { recursive: true });

  // Write types.ts
  fs.writeFileSync(path.join(SRC_DIR, 'types.ts'), generateTypes());

  const exports = [];

  for (const glyph of glyphs) {
    const pascalName = 'Icon' + parseName(glyph.name);
    const fileName = 'icon-' + toFileName(glyph.name);
    const filePath = path.join(SRC_DIR, `${fileName}.tsx`);

    fs.writeFileSync(filePath, generateComponent(pascalName, glyph.d));
    exports.push({ pascalName, fileName });
  }

  // Write index.ts barrel
  const indexLines = [
    `export type { IconProps } from './types';`,
    '',
    ...exports.map((e) => `export { ${e.pascalName} } from './${e.fileName}';`),
    '',
  ];
  fs.writeFileSync(path.join(SRC_DIR, 'index.ts'), indexLines.join('\n'));

  console.log(`Generated ${exports.length} icon components`);
}

main();
