# 在 Vite 中使用

[Vite](https://vite.dev/) 是目前推荐的 React 项目脚手架工具。本指南将介绍如何在 Vite 项目中使用 tiny-ui。

## 创建项目

```bash
$ npm create vite@latest my-app -- --template react-ts
$ cd my-app
$ npm install
```

启动开发服务器，确认一切正常：

```bash
$ npm run dev
```

在浏览器中打开 http://localhost:5173/。

## 安装 tiny-ui

```bash
$ npm install tiny-ui
```

修改 `src/App.tsx`，从 tiny-ui 引入 Button 组件：

```tsx
import { Button } from 'tiny-ui';
import 'tiny-ui/dist/styles/index.css';

const App = () => {
  return (
    <div style={{ padding: 24 }}>
      <Button btnType="primary">Button</Button>
    </div>
  );
};

export default App;
```

现在你应该能在页面上看到一个主按钮。Vite 会自动对 ES 模块进行 tree-shaking，因此只有你引入的组件才会被打包。
