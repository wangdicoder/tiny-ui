import Basic from './demo/basic.md'
import Direction from './demo/direction.md'

# Flip

一个可以展示正反两面内容的翻转盒子。

## 使用场景

如果某个内容附带次要信息，可以将主要内容展示在正面，辅助信息展示在背面。

## 引入方式

```jsx
import { Flip } from 'tiny-ui';

const { Item } = Flip;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
  </Column>
  <Column>
    <Direction/>
  </Column>
</Layout>

## API

| 属性      | 说明                  | 类型                                    | 默认值       |
| --------- | --------------------- | --------------------------------------- | ------------ |
| width     | 容器宽度              | number &#124; string                    |              |
| height    | 容器高度              | number &#124; string                    |              |
| direction | 翻转方向              | enum: `horizontal` &#124; `vertical`    | `horizontal` |
| reverse   | 反转方向              | boolean                                 | false        |
