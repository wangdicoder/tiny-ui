import Basic from './demo/basic.md'
import Nested from './demo/nested.md'
import Affix from './demo/affix.md'
import OffsetTop from './demo/offset-top.md'

# Anchor

用于跳转到页面指定位置的锚点。

## 使用场景

- 需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。
- 滚动时自动追踪当前可见区域。

## 引入方式

```jsx
import { Anchor } from 'tiny-design';
```

## 示例

<Layout>
  <Column>
    <Basic/>
    <Affix/>
  </Column>
  <Column>
    <Nested/>
    <OffsetTop/>
  </Column>
</Layout>

## API

### Anchor

| 属性         | 说明                               | 类型                                                                       | 默认值       |
| ------------ | ---------------------------------- | -------------------------------------------------------------------------- | ------------ |
| type         | 指示器风格                         | 'dot' \| 'line'                                                            | dot          |
| affix        | 是否使用固钉模式                   | boolean                                                                    | false        |
| offsetTop    | 距离窗口顶部达到指定偏移量后触发   | number                                                                     | 0            |
| offsetBottom | 距离窗口底部达到指定偏移量后触发   | number                                                                     | -            |
| getContainer | 指定滚动的容器                     | () => HTMLElement                                                          | () => window |
| onChange     | 监听锚点链接改变                   | (currentActiveLink: string) => void                                        | -            |
| onClick      | 点击链接时的回调                   | (e: MouseEvent, link: \{ title: string; href: string \}) => void            | -            |

### Anchor.Link

| 属性     | 说明               | 类型            | 默认值  |
| -------- | ------------------ | --------------- | ------- |
| href     | 锚点链接           | string          | -       |
| title    | 文字内容           | string          | -       |
| children | 嵌套的 Anchor.Link | Anchor.Link[]   | -       |
