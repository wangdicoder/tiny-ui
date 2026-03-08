import Basic from './demo/basic.md'
import Sizes from './demo/sizes.md'
import Actions from './demo/actions.md'
import Grid from './demo/grid.md'
import Loading from './demo/loading.md'

# List 列表

简单的列表组件，用于展示数据集合。

## 使用场景

用于以垂直列表形式展示结构化数据，支持头像、标题、描述和操作。

## 使用方式

```jsx
import { List } from 'tiny-ui';
```

## 代码演示

<layout>
  <column>
    <Basic/>
    <Actions/>
    <Grid/>
  </column>
  <column>
    <Sizes/>
    <Loading/>
  </column>
</layout>

## API

### List

| 属性       | 说明               | 类型                                    | 默认值  |
| ---------- | ------------------ | --------------------------------------- | ------- |
| dataSource | 列表数据           | any[]                                   | []      |
| renderItem | 每项渲染函数       | (item, index) => ReactNode              |         |
| header     | 列表头部           | ReactNode                               |         |
| footer     | 列表底部           | ReactNode                               |         |
| loading    | 加载状态           | boolean                                 | false   |
| bordered   | 显示边框           | boolean                                 | false   |
| split      | 显示分割线         | boolean                                 | true    |
| size       | 列表尺寸           | 'sm' \| 'md' \| 'lg'                   | md      |
| grid       | 网格布局配置       | { gutter?: number, column?: number }    |         |
| pagination | 分页配置           | false \| ListPaginationProps            |         |

### List.Item

| 属性     | 说明         | 类型           | 默认值  |
| -------- | ------------ | -------------- | ------- |
| extra    | 额外内容     | ReactNode      |         |
| actions  | 操作按钮列表 | ReactNode[]    |         |

### List.ItemMeta

| 属性        | 说明     | 类型      | 默认值  |
| ----------- | -------- | --------- | ------- |
| avatar      | 头像     | ReactNode |         |
| title       | 标题     | ReactNode |         |
| description | 描述     | ReactNode |         |
