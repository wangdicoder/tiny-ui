import Basic from './demo/basic.md'

# Layout

页面布局。

## 组件概述

- `Layout`：布局容器，其中可以嵌套 `Header` `Sidebar` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，带有默认样式，其中可以嵌套任何元素，必须放在 `Layout` 中。
- `Sidebar`：侧边栏，带有默认样式和基本功能，其中可以嵌套任何元素，必须放在 `Layout` 中。
- `Content`：内容布局，带有默认样式，其中可以嵌套任何元素，必须放在 `Layout` 中。
- `Footer`：底部布局，带有默认样式，其中可以嵌套任何元素，必须放在 `Layout` 中。

## 引入方式

```jsx
import { Layout } from 'tiny-design';

const { Header, Footer, Content, Sidebar } = Layout;
```

## 代码示例

<Basic />


## API

### Layout

> `Layout.Header` `Layout.Footer` `Layout.Content` 与 `Layout` 共享相同的 API。

| 属性  | 说明               | 类型              | 默认值      |
| --------- | ------------------------- | ----------------- | ------------ |
| className | 容器的 className      | string            | -            |
| style     | 自定义样式         | CSSProperties     | -            |
