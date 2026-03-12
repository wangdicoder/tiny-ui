import AlignTitle from './demo/align-title.md'
import Horizontal from './demo/horizontal.md'
import Vertical from './demo/vertical.md'

# Divider

分割线用于区隔不同的内容。

## 使用场景

- 对文章的不同章节进行分隔。
- 对行内文字和链接进行分隔，例如表格的操作列。

## 引入方式

```jsx
import { Divider } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Horizontal/>
    <Vertical/>
  </Column>
  <Column>
    <AlignTitle/>
  </Column>
</Layout>

## API

| 属性  | 说明                      | 类型                                           | 默认值      |
| --------- | -------------------------------- | ---------------------------------------------- | ------------ |
| type      | 分割线方向类型        | enum: `horizontal` &#124; `vertical`           | `horizontal` |
| dashed    | 是否为虚线           | boolean                                        | false        |
| align     | 分割线中标题的位置 | enum: `left` &#124; `right` &#124; `center`    | `center`     |
| style	    | 容器的样式对象 | CSSProperties                                  | -            |
| className	| 容器的 className           | string                                         | -            |
