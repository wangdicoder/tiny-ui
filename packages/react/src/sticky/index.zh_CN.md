import Basic from './demo/basic.md'
import Container from './demo/container.md'
import Callback from './demo/callback.md'

# Sticky

包裹其他组件使其固定在视口中。

## 使用场景

在较长的网页中，某些内容固定在视口中会很有帮助。这常见于菜单和操作栏。

## 引入方式

```jsx
import { Sticky } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Basic />
    <Container />
  </Column>
  <Column>
    <Callback />
  </Column>
</Layout>

## API

| 属性              | 说明                                  | 类型                          | 默认值        |
| ----------------- | ------------------------------------- | ----------------------------- | ------------- |
| offsetBottom      | 距离视口底部的偏移量                  | number                        | 0             |
| offsetTop         | 距离视口顶部的偏移量                  | number                        | -             |
| container         | 指定可滚动区域的 DOM 节点            | () => HTMLElement             | () => window  |
| onChange          | 固定状态改变时的回调                  | (stuck: boolean) => void     | -             |

**注意：** `Sticky` 的子元素不能设置 `position: absolute` 属性。
