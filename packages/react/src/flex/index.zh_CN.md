import Basic from './demo/basic.md'
import Align from './demo/align.md'
import Gap from './demo/gap.md'
import Wrap from './demo/wrap.md'

# Flex

弹性盒子布局容器，使用 CSS `gap` 设置间距，无需额外包裹子元素。

## 使用场景

需要轻量级弹性布局时使用，无需为每个子元素添加额外的包裹元素。

## 引入方式

```jsx
import { Flex } from 'tiny-design';
```

## 代码示例

<Basic />
<Align />
<Gap />
<Wrap />

## API

| 属性       | 说明                          | 类型                                                                 | 默认值  |
| --------- | ----------------------------- | -------------------------------------------------------------------- | ------- |
| vertical  | 设置为纵向排列                  | `boolean`                                                            | `false` |
| wrap      | CSS flex-wrap 属性             | `nowrap` &#124; `wrap` &#124; `wrap-reverse`                         | -       |
| justify   | CSS justify-content 属性       | `string`                                                             | -       |
| align     | CSS align-items 属性           | `string`                                                             | -       |
| gap       | 子元素间距                     | `sm` &#124; `md` &#124; `lg` &#124; `number` &#124; `string`        | -       |
| flex      | CSS flex 简写属性               | `string`                                                             | -       |
| component | 自定义元素类型                  | `React.ElementType`                                                  | `div`   |
