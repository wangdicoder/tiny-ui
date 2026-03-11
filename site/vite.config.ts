import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkGfm from 'remark-gfm';
import rehypeMdxCodeProps from 'rehype-mdx-code-props';

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
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..'],
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
