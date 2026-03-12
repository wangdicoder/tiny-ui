# 快速上手

## 安装

### 使用包管理器

你需要先在本地正确安装和配置好 `Node.js` 环境。

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

## 引入方式

以下是一个使用默认按钮组件的简单示例。

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from 'tiny-design';

const App = () => {
  return <Button>Hello World</Button>;
}

createRoot(document.getElementById('root')).render(<App />);
```

样式会随组件自动导入，无需单独引入 CSS 文件。Tiny UI 通过 `es/` 目录提供 ES 模块，因此 webpack、Vite、Rollup 等现代打包工具会自动对未使用的组件及其样式进行 tree-shaking。
