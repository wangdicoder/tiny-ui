# Get Started

## Install

### Using npm or yarn

You first need to install and configure the `Node.js` environment properly locally.

```bash
$ npm install tiny-ui --save
```

If you are using yarn you can also install through yarn

```bash
$ yarn add tiny-ui
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
import ReactDOM from 'react-dom';
import { Button } from 'tiny-ui';

const App = () => {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

And import stylesheets manually,
```jsx
import 'tiny-ui/dist/styles/index.css';
```

### Use modularized tiny-ui

To avoid the problem of packaging files too large in a production environment, load a component depending on demand.

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

    ```json
    // webpack babel loader option or .babelrc

    {
      "plugins": [
        ["import", { "libraryName": "tiny-ui", "style": "css" }] // `style: true` for scss
      ]
    }
    ```

    This allows you to import components from antd without having to manually import the corresponding stylesheet. The antd babel plugin will automatically import stylesheets.

    ```jsx
    // import js and css modularly, parsed by babel-plugin-import
    import { Avatar } from 'tiny-ui';
    ```

- Manually import

    ```jsx
    import Avatar from 'tiny-ui/lib/avatar';        // for js
    import 'tiny-ui/lib/avatar/style/css';          // for css
    // import 'tiny-ui/lib/avatar/style';           // that will import scss
    ```

### Use in browser (UMD)

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/index.css" crossorigin>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js" crossorigin></script>
    <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin></script>

    <!-- tiny.js must be added following by react.js -->
    <script src="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/tiny.js" crossorigin></script>
  </head>
  <body>
    <div id="root">loading...</div>

    <script type="text/babel">
      const { Button } = tiny;

      ReactDOM.render(
      	<Button btnType="primary">Click me</Button>,
      	document.getElementById('root')
      );
    </script>
  </body>
</html>
```
