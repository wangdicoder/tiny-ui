import Basic from './demo/basic.md'
import More from './demo/more.md'
import Size from './demo/size.md'
import Disabled from './demo/disabled.md'
import Align from './demo/align.md'
import Controlled from './demo/controlled.md'

# Pagination

用于分隔长数据集，使用户更容易获取信息。

## 使用场景

- 当加载/渲染所有数据项需要较长时间时。

- 当需要通过翻页来浏览数据时。

## 引入方式

```js
import { Pagination } from 'tiny-design';
```

## 代码示例

<Basic />
<More />
<Size />
<Disabled />
<Align />
<Controlled />

## API

| 属性          | 说明                               | 类型                                                          | 默认值   |
| ----------------- | ----------------------------------------- | ------------------------------------------------------------- | --------- |
| current           | 当前页码                       | number                                                        | -         |
| total             | 数据总条数                | number                                                        | -         |
| defaultCurrent    | 默认的当前页码               | number                                                        | 1         |
| disabled          | 是否禁用分页                        | boolean                                                       | false     |
| pageSize          | 每页数据条数             | number                                                        | 10        |
| size              | 分页器尺寸                           | enum: `sm` &#124; `md`                                        | -         |
| defaultPageSize   | 默认的每页数据条数     | enum: `sm` &#124; `md`                                        | `md`      |
| align             | 分页器对齐方式                      | enum: `left` &#124; `center` &#124; `right`                   | `center`  |
| onChange          | 页码变化时的回调   | (current: number, total: number, pageSize: number) => void    | -         |
