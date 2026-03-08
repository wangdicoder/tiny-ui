# 在 create-react-app 中使用

[create-react-app](https://github.com/facebook/create-react-app) 可以帮助快速搭建一个 React 项目，本指南将介绍如何在 create-react-app 中配合使用 tiny-ui。

## 安装和初始化

开始之前，你可能需要先安装 `npm`。

```bash
$ npx create-react-app test-app
```

执行完成后，工具会自动生成一个 React 开发脚手架，并安装开发 React 所需的所有依赖。安装完成后执行

```bash
$ npm start
```

打开浏览器访问 http://localhost:3000/，页面上会显示 "Welcome to React" 标题。

## 安装 tiny-ui

```bash
$ npm install tiny-ui --save
```

修改 `src/App.js`，从 `tiny-ui` 引入 Button 组件。

```jsx
import React from 'react';
import { Button } from 'tiny-ui';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Button btnType="primary">Button</Button>
    </div>
  );
};

export default App;
```

在 `src/App.css` 文件顶部添加 `tiny-ui/dist/styles/index.css`。

```css
@import '~tiny-ui/dist/styles/index.css';

.App {
  text-align: center;
}

...
```

然后你就能看到一个强调按钮，现在可以开始开发了。
如果遇到其他问题，可以查阅 create-react-app 的[官方文档](https://facebook.github.io/create-react-app/)。

## 进阶指南

虽然我们已经成功运行了 tiny-ui 组件，但在实际开发中，这个示例仍然存在不少问题。例如，我们实际上引入了项目中所有组件的样式，这可能会导致网络性能问题。

现在我们需要自定义默认的 webpack 配置。可以通过 [react-app-rewired](https://github.com/timarney/react-app-rewired) 来实现，这是 create-react-app 的自定义配置方案之一。

引入 react-app-rewired 并修改 package.json 中的 scripts 字段。由于新版 [react-app-rewired@2.x](https://github.com/timarney/react-app-rewired#alternatives) 的问题，你还需要配合使用 [customize-cra](https://github.com/arackaf/customize-cra)。

```bash
$ npm install react-app-rewired customize-cra --save-dev
```

然后更新 `package.json` 文件。

```diff
/* package.json */

"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}
```

然后在项目根目录下创建 `config-overrides.js` 文件，用于进一步的配置覆盖。

```js
module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};
```

### 使用 babel-plugin-import

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一个用于按需引入组件的 babel 插件。现在我们来安装它。

```bash
$ npm install babel-plugin-import --save-dev
```

然后修改 `config-overrides.js`。

```diff
+ const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'tiny-ui',
+     style: 'css',
+   }),
+ );
```

移除之前添加的 `@import '~tiny-ui/dist/index.css';` 语句，因为 `babel-plugin-import` 会自动引入样式，然后按如下方式引入组件：

```diff
// src/App.js

  import React from 'react';
- import Button from 'tiny-ui/lib/button';
+ import { Button } from 'tiny-ui';
  import './App.css';

  const App = () => {
    return (
      <div className="App">
        <Button btnType="primary">Button</Button>
      </div>
    );
  };

  export default App;
```

之后，使用 `npm start` 重新启动项目并访问示例页面。
