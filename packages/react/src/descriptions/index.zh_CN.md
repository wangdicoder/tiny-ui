import Basic from './demo/basic.md'
import Border from './demo/border.md'
import Size from './demo/size.md'
import Vertical from './demo/vertical.md'
import VerticalBorder from './demo/vertical-border.md'

# Descriptions

成组展示多个只读字段。

## 使用场景

常用于详情页的信息展示。

## 引入方式

```jsx
import { Descriptions } from 'tiny-design';
```

## 代码示例

<Basic />
<Border />
<Size />
<Vertical />
<VerticalBorder />

## API

### Descriptions

| 属性          | 说明                                          | 类型                                  | 默认值        |
| ------------- | --------------------------------------------- | ------------------------------------- | ------------- |
| title         | 描述列表的标题                                | ReactNode                             | -             |
| bordered      | 是否显示边框                                  | boolean                               | false         |
| column        | 每行 `Descriptions.Items` 的数量              | number                                | 3             |
| size	        | 设置 `Descriptions` 的尺寸                    | enum: `sm` &#124; `md` &#124; `lg`    | `md`          |
| layout	    | 描述布局方式                                  | enum: `horizontal` &#124; `vertical`  | `horizontal`  |
| colon	        | 是否显示冒号                                  | boolean                               | -             |

### Descriptions.Item

| 属性          | 说明                                  | 类型              | 默认值    |
| ------------- | ------------------------------------- | ----------------- | --------- |
| label         | 内容的标签描述                        | ReactNode         | -         |
| span          | 包含的列数                            | number            | 1         |
