import Basic from './demo/basic.md'
import Vertical from './demo/vertical.md'
import Size from './demo/size.md'
import Align from './demo/align.md'

# Space

设置组件之间的间距。

## 使用场景

避免组件紧贴在一起，设置统一的间距。

## 引入方式

```jsx
import { Space } from 'tiny-ui';
```

## 代码示例

<Basic />
<Vertical />
<Size />
<Align />

## API

| 属性  | 说明       | 类型                                                          | 默认值       |
| --------- | ----------------- | ------------------------------------------------------------- | ------------- |
| align     | 对齐方式       | enum: `start` &#124; `end` &#124; `center` &#124; `baseline`  | `center`      |
| direction | 间距方向	| enum: `horizontal` &#124; `vertical`                          | `horizontal`  |
| size      | 间距大小        | enum: `sm` &#124; `md` &#124; `lg` &#124; `number`            | `sm`          |

