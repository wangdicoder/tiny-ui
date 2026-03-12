import Basic from './demo/basic.md'
import NoBorder from './demo/no-border.md'
import Simple from './demo/simple.md'
import Hoverable from './demo/hoverable.md'
import Active from './demo/active.md'
import InnerCard from './demo/inner-card.md'
import Image from './demo/image.md'

# Card

简洁的矩形容器。

## 使用场景

卡片可用于展示与某一主题相关的内容。内容可以由多种不同类型和大小的元素组成。

## 引入方式

```jsx
import { Card } from 'tiny-design';

const { Content } = Card;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <NoBorder/>
    <Simple/>
    <Hoverable/>
    <Active/>
  </Column>
  <Column>
    <InnerCard/>
    <Image/>
  </Column>
</Layout>

## API

| 属性        | 说明                                         | 类型                     | 默认值  |
| ----------- | -------------------------------------------- | ------------------------ | ------- |
| title       | 卡片标题                                     | ReactNode                | -       |
| extra       | 右上角额外内容                               | ReactNode                | -       |
| hoverable   | 鼠标悬停时浮起                               | boolean                  | false   |
| active      | 显示带有阴影的卡片                           | boolean                  | false   |
| bordered    | 是否显示边框                                 | boolean                  | true    |
| actions     | 卡片底部的操作列表                           | ReactNode[]              | -       |
| header      | 自定义头部内容                               | ReactNode                | -       |
| footer      | 自定义底部内容                               | ReactNode                | -       |
| headerStyle | 头部容器的行内样式                           | CSSProperties            | -       |
| bodyStyle   | 内容容器的行内样式                           | CSSProperties            | -       |
| footerStyle | 底部容器的行内样式                           | CSSProperties            | -       |
| style       | 容器样式对象                                 | CSSProperties            | -       |
| className   | 容器的 className                             | string                   | -       |
