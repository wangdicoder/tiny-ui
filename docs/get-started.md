# Get Started

## Install

### Using a package manager

You first need to install and configure the `Node.js` environment properly locally.

```bash
$ npm install tiny-ui
```
<br />

```bash
$ yarn add tiny-ui
```
<br />

```bash
$ pnpm add tiny-ui
```

### Import in Browser

Add script and link tags in your browser and use the global variable `tiny`. We provide `tiny.js` `index.css` and `tiny.min.js` `index.min.css` under **tiny-ui/dist** in tiny's npm package.

- Development environment - It is recommended to use an uncompressed version for easy debugging
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/tiny.css">
    <script src="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/tiny.js"></script>
    ```

- Production environment - Introduce fixed version and compressed components to ensure code stability and increase loading speed
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/tiny.min.css">
    <script src="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/tiny.min.js"></script>
    ```

## Usage

The following is a simple example of using a default button component.

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'tiny-ui';
import 'tiny-ui/dist/styles/index.css';

const App = () => {
  return <Button>Hello World</Button>;
}

createRoot(document.getElementById('root')).render(<App />);
```

Tiny UI ships ES modules via the `es/` directory, so modern bundlers like webpack, Vite, and Rollup will automatically tree-shake unused components — no extra plugins needed.

### Use in browser (UMD)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/index.css" crossorigin>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js" crossorigin></script>
    <script src="https://unpkg.com/react@18/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js" crossorigin></script>

    <!-- tiny.js must be added following by react.js -->
    <script src="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/tiny.js" crossorigin></script>
  </head>
  <body>
    <div id="root">loading...</div>

    <script type="text/babel">
      const { Button } = tiny;

      ReactDOM.createRoot(document.getElementById('root')).render(
      	<Button btnType="primary">Click me</Button>
      );
    </script>
  </body>
</html>
```
