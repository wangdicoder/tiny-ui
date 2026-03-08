# 快速上手

## 安装

### 使用 npm 或 yarn

你需要先在本地正确安装和配置好 `Node.js` 环境。

```bash
$ npm install tiny-ui --save
```

如果你使用 yarn，也可以通过 yarn 安装

```bash
$ yarn add tiny-ui
```

### 在浏览器中引入

在浏览器中添加 script 和 link 标签，并使用全局变量 `tiny`。我们在 tiny 的 npm 包中的 **tiny-ui/dist** 目录下提供了 `tiny.js`、`index.css` 以及 `tiny.min.js`、`index.min.css`。

- 开发环境 - 建议使用未压缩版本，便于调试
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/tiny.css">
    <script src="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/tiny.js"></script>
    ```

- 生产环境 - 引入固定版本的压缩组件，以确保代码稳定性并提高加载速度
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/tiny.min.css">
    <script src="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/tiny.min.js"></script>
    ```

## 引入方式

以下是一个使用默认按钮组件的简单示例。

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'tiny-ui';

const App = () => {
  return <Button>Hello World</Button>;
}

createRoot(document.getElementById('root')).render(<App />);
```

同时需要手动引入样式文件，
```jsx
import 'tiny-ui/dist/styles/index.css';
```

### 按需加载 tiny-ui

为了避免在生产环境中打包文件过大的问题，可以按需加载组件。

- 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)（推荐）

    ```json
    // webpack babel loader option or .babelrc

    {
      "plugins": [
        ["import", { "libraryName": "tiny-ui", "style": "css" }] // `style: true` for scss
      ]
    }
    ```

    这样你就可以从 tiny-ui 中引入组件，而无需手动引入对应的样式文件。babel 插件会自动引入样式。

    ```jsx
    // import js and css modularly, parsed by babel-plugin-import
    import { Avatar } from 'tiny-ui';
    ```

- 手动引入

    ```jsx
    import Avatar from 'tiny-ui/lib/avatar';        // for js
    import 'tiny-ui/lib/avatar/style/css';          // for css
    // import 'tiny-ui/lib/avatar/style';           // that will import scss
    ```

### 在浏览器中使用（UMD）

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title></title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tiny-ui@{version_number}/dist/styles/index.css" crossorigin>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js" crossorigin></script>
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
