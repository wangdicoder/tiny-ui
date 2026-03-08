import Basic from './demo/basic.md'
import Selection from './demo/selection.md'
import Sorting from './demo/sorting.md'
import CustomRender from './demo/custom-render.md'
import Sizes from './demo/sizes.md'
import Pagination from './demo/pagination.md'

# Table

A table component for displaying tabular data with sorting, selection, and pagination.

## Scenario

Used for displaying structured data with support for sorting, filtering, row selection, and pagination.

## Usage

```jsx
import { Table } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Selection/>
    <Pagination/>
  </column>
  <column>
    <Sorting/>
    <CustomRender/>
    <Sizes/>
  </column>
</layout>

## API

### Table

| Property      | Description                          | Type                                            | Default |
| ------------- | ------------------------------------ | ----------------------------------------------- | ------- |
| columns       | columns configuration                | ColumnType[]                                    |         |
| dataSource    | data array to render                 | any[]                                           | []      |
| rowKey        | row key field or getter              | string \| (record) => Key                       | key     |
| loading       | loading state                        | boolean                                         | false   |
| bordered      | show all borders                     | boolean                                         | false   |
| size          | table size                           | 'sm' \| 'md' \| 'lg'                           | md      |
| scroll        | scrollable area                      | { x?: number, y?: number }                      |         |
| rowSelection  | row selection config                 | RowSelection                                    |         |
| pagination    | pagination config (false to disable) | false \| TablePaginationConfig                  |         |
| onChange      | sort/pagination change callback      | (pagination, sorter) => void                    |         |
| emptyText     | empty state text                     | ReactNode                                       | No Data |
| showHeader    | show table header                    | boolean                                         | true    |

### ColumnType

| Property     | Description                 | Type                                     | Default |
| ------------ | --------------------------- | ---------------------------------------- | ------- |
| title        | column header               | ReactNode                                |         |
| dataIndex    | field name in data          | string                                   |         |
| key          | unique key                  | string                                   |         |
| width        | column width                | number \| string                         |         |
| align        | text alignment              | 'left' \| 'center' \| 'right'           | left    |
| sorter       | enable sorting              | boolean \| (a, b) => number              |         |
| render       | custom cell renderer        | (value, record, index) => ReactNode      |         |
| ellipsis     | truncate long content       | boolean                                  | false   |

### RowSelection

| Property         | Description                | Type                                     | Default  |
| ---------------- | -------------------------- | ---------------------------------------- | -------- |
| selectedRowKeys  | controlled selected keys   | Key[]                                    |          |
| onChange         | selection change callback  | (keys, rows) => void                     |          |
| type             | selection type             | 'checkbox' \| 'radio'                   | checkbox |
