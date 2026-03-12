import Basic from './demo/basic.md'
import Selection from './demo/selection.md'
import Sorting from './demo/sorting.md'
import CustomRender from './demo/custom-render.md'
import Sizes from './demo/sizes.md'
import Pagination from './demo/pagination.md'

# Table 表格

展示表格数据，支持排序、选择和分页。

## 使用场景

用于展示结构化数据，支持排序、筛选、行选择和分页。

## 使用方式

```jsx
import { Table } from 'tiny-design';
```

## 代码演示

<Layout>
  <Column>
    <Basic/>
    <Selection/>
    <Pagination/>
  </Column>
  <Column>
    <Sorting/>
    <CustomRender/>
    <Sizes/>
  </Column>
</Layout>

## API

### Table

| 属性          | 说明                 | 类型                                            | 默认值  |
| ------------- | -------------------- | ----------------------------------------------- | ------- |
| columns       | 列配置               | ColumnType[]                                    |         |
| dataSource    | 数据数组             | any[]                                           | []      |
| rowKey        | 行 key 字段          | string \| (record) => Key                       | key     |
| loading       | 加载状态             | boolean                                         | false   |
| bordered      | 显示边框             | boolean                                         | false   |
| size          | 表格尺寸             | 'sm' \| 'md' \| 'lg'                           | md      |
| scroll        | 滚动区域             | \{ x?: number, y?: number \}                      |         |
| rowSelection  | 行选择配置           | RowSelection                                    |         |
| pagination    | 分页配置             | false \| TablePaginationConfig                  |         |
| onChange      | 排序/分页变化回调    | (pagination, sorter) => void                    |         |
| emptyText     | 空状态文本           | ReactNode                                       | 暂无数据 |
| showHeader    | 显示表头             | boolean                                         | true    |

### ColumnType

| 属性         | 说明           | 类型                                     | 默认值  |
| ------------ | -------------- | ---------------------------------------- | ------- |
| title        | 列标题         | ReactNode                                |         |
| dataIndex    | 数据字段名     | string                                   |         |
| key          | 唯一标识       | string                                   |         |
| width        | 列宽           | number \| string                         |         |
| align        | 对齐方式       | 'left' \| 'center' \| 'right'           | left    |
| sorter       | 排序功能       | boolean \| (a, b) => number              |         |
| render       | 自定义渲染     | (value, record, index) => ReactNode      |         |
| ellipsis     | 文本溢出省略   | boolean                                  | false   |

### RowSelection

| 属性             | 说明               | 类型                                     | 默认值   |
| ---------------- | ------------------ | ---------------------------------------- | -------- |
| selectedRowKeys  | 选中行 keys        | Key[]                                    |          |
| onChange         | 选中变化回调       | (keys, rows) => void                     |          |
| type             | 选择类型           | 'checkbox' \| 'radio'                   | checkbox |
