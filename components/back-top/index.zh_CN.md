import Basic from './demo/basic.md'

# BackTop

返回页面顶部。

## 使用场景

- 当页面内容很长时。
- 当需要频繁返回顶部查看内容时。

## 引入方式

```jsx
import { BackTop } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
  </Column>
  <Column>
  </Column>
</Layout>

## API

| 属性              | 说明                                                                      | 类型              | 默认值        |
| ----------------- | ------------------------------------------------------------------------- | ----------------- | ------------- |
| target            | 指定可滚动区域的 DOM 节点                                                 | () => HTMLElement | () => window  |
| visibilityHeight  | 滚动高度达到此值时才出现 `BackTop` 按钮                                   | number            | 300           |
| onClick           | 点击按钮时的回调                                                          | () => void        | -             |
| style	            | 容器的样式对象                                                            | CSSProperties     | -             |
| className	        | 容器的类名                                                                | string            | -             |
