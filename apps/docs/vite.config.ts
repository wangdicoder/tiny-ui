import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';
import path from 'path';

const reactSrc = path.resolve(__dirname, '../../packages/react/src');

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({
      mdxExtensions: ['.mdx', '.md'],
      mdExtensions: [],
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeMdxCodeProps],
    }) },
    react({ include: /\.(jsx|tsx|md|mdx)$/ }),
  ],
  resolve: {
    alias: {
      '@tiny-ui/react': reactSrc,
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['../..'],
    },
  },
  build: {
    outDir: 'build',
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
});
