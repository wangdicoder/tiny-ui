# Get Started

## Install

You first need to install and configure the `Node.js` environment properly locally.

```bash
$ npm install tiny-ui --save
```

If you are using yarn you can also install through yarn:

```bash
$ yarn add tiny-ui
```

## Examples

The following is a simple example of using a default button component.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'tiny-ui';

// import default style
import 'tiny-ui/dist/styles/tiny.scss'; // or 'tiny-ui/dist/styles/tiny.min.css'

const App = () => {
  return <Button>Hello World</Button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

## Use modularized tiny-ui

To avoid the problem of packaging files too large in a production environment, load a component depending on demand.

- Use [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) (Recommended)

    ```json
    // .babelrc or babel-loader option
    
    {
      "plugins": [
        ["import", { "libraryName": "tiny-ui", "style": "css" }] // `style: true` for less
      ]
    }
    ```

- Manually import

    ```js
    import DatePicker from 'antd/lib/date-picker';  // for js
    import 'antd/lib/date-picker/style/css';        // for css
    // import 'antd/lib/date-picker/style';         // that will import less
    ```
