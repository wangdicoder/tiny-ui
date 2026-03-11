import { defineConfig } from 'tsdown';

const scssToCssPlugin = {
  name: 'scss-to-css',
  resolveId(source: string) {
    if (source.endsWith('.scss')) {
      return { id: source.replace(/\.scss$/, '.css'), external: true };
    }
  },
};

const shared = {
  entry: ['components/index.ts', 'components/*/style/index.tsx'],
  unbundle: true,
  dts: true,
  sourcemap: true,
  target: 'es2020' as const,
  platform: 'browser' as const,
  outExtensions: () => ({ js: '.js', dts: '.d.ts' }),
  deps: {
    skipNodeModulesBundle: true,
  },
  plugins: [scssToCssPlugin],
};

export default defineConfig([
  {
    ...shared,
    format: 'esm',
    outDir: 'es',
  },
  {
    ...shared,
    format: 'cjs',
    outDir: 'lib',
  },
]);
