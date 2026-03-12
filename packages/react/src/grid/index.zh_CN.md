import Basic from './demo/basic.md'
import Gutter from './demo/gutter.md'
import Offset from './demo/offset.md'
import Order from './demo/order.md'
import Alignment from './demo/alignment.md'

# Grid

通过基础的 24 列栅格系统，快速简便地创建布局。

## 引入方式

```jsx
import { Row, Col } from 'tiny-design';
```

## 代码示例

<Basic />
<Gutter />
<Offset />
<Order />
<Alignment />

## API

### Row

| 属性   | 说明                                                     | 类型                                                                                         | 默认值 |
| ---------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| gutter     | 栅格间隔                                           | number &#124; [number, number]                                                               | 0       |
| gutterSide | 间距包含首尾子元素                     | boolean                                                                                      | false   |
| align      | 垂直对齐方式                                              | enum: `top` &#124; `center` &#124; `bottom`                                                  | -       |
| justify    | 水平排列方式                                          | enum: `start` &#124; `end` &#124; `center` &#124; `space-around` &#124; `space-between`      | -       |
| style      | 容器的样式对象                                       | CSSProperties                                                                                | -       |
| className  | 容器的 className                                          | string                                                                                       | -       |

### Col

| 属性  | 说明                                      | 类型                                          | 默认值 |
| --------- | ------------------------------------------------ | --------------------------------------------- | ------- |
| span      | 栅格占位格数（共 24 格）            | number                                        | -       |
| offset    | 栅格左侧的偏移格数          | number                                        | 0       |
| order     | 栅格排列顺序                                  | number                                        | 0       |
| xs        | 屏幕 < 480px 时的配置或对象               | number &#124; \{ span, offset, order \}         | -       |
| sm        | 屏幕 >= 600px 时的配置或对象              | number &#124; \{ span, offset, order \}         | -       |
| md        | 屏幕 >= 840px 时的配置或对象              | number &#124; \{ span, offset, order \}         | -       |
| lg        | 屏幕 >= 960px 时的配置或对象              | number &#124; \{ span, offset, order \}         | -       |
| xl        | 屏幕 >= 1280px 时的配置或对象             | number &#124; \{ span, offset, order \}         | -       |
| xxl       | 屏幕 >= 1440px 时的配置或对象             | number &#124; \{ span, offset, order \}         | -       |
| style     | 容器的样式对象                        | CSSProperties                                 | -       |
| className | 容器的 className                           | string                                        | -       |
