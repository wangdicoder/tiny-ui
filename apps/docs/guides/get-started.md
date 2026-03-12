# Get Started

## Install

### Using a package manager

You first need to install and configure the `Node.js` environment properly locally.

```bash
$ npm install tiny-design
```
<br />

```bash
$ yarn add tiny-design
```
<br />

```bash
$ pnpm add tiny-design
```

## Usage

The following is a simple example of using a default button component.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'tiny-design';

const App = () => {
  return <Button>Hello World</Button>;
}

createRoot(document.getElementById('root')).render(<App />);
```

Styles are automatically imported alongside each component — no separate CSS import needed. Tiny UI ships ES modules via the `es/` directory, so modern bundlers like webpack, Vite, and Rollup will automatically tree-shake unused components and their styles.
