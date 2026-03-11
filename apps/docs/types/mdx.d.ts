/// <reference types="vite/client" />

declare module '*.md' {
  import type { ComponentType } from 'react';
  const Component: ComponentType;
  export default Component;
}

declare module '*.mdx' {
  import type { ComponentType } from 'react';
  const Component: ComponentType;
  export default Component;
}
