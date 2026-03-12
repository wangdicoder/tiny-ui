import Basic from './demo/basic.md'
import Sizes from './demo/sizes.md'
import Actions from './demo/actions.md'
import Grid from './demo/grid.md'
import Loading from './demo/loading.md'
import Pagination from './demo/pagination.md'
import Virtual from './demo/virtual.md'

# List

A simple list component for displaying a collection of items.

## Scenario

Used to display structured data in a vertical list, with support for avatars, titles, descriptions, and actions.

## Usage

```jsx
import { List } from 'tiny-design';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Actions/>
    <Grid/>
  </Column>
  <Column>
    <Sizes/>
    <Loading/>
    <Virtual/>
    <Pagination/>
  </Column>
</Layout>

## API

### List

| Property   | Description                      | Type                                    | Default |
| ---------- | -------------------------------- | --------------------------------------- | ------- |
| dataSource | data array for the list          | any[]                                   | []      |
| renderItem | render function for each item    | (item, index) => ReactNode              |         |
| header     | list header                      | ReactNode                               |         |
| footer     | list footer                      | ReactNode                               |         |
| loading    | show loading indicator           | boolean                                 | false   |
| bordered   | show border                      | boolean                                 | false   |
| split      | show divider between items       | boolean                                 | true    |
| size       | list size                        | 'sm' \| 'md' \| 'lg'                   | md      |
| grid       | grid layout configuration        | \{ gutter?: number, column?: number \}    |         |
| virtual    | enable virtual scrolling         | boolean                                 | false   |
| height     | container height (required when virtual) | number                           |         |
| itemHeight | height of each item in px (virtual mode) | number                           |         |
| pagination | pagination config or false       | false \| ListPaginationProps            |         |

### List.Item

| Property | Description              | Type           | Default |
| -------- | ------------------------ | -------------- | ------- |
| extra    | extra content            | ReactNode      |         |
| actions  | list of action buttons   | ReactNode[]    |         |

### List.ItemMeta

| Property    | Description       | Type      | Default |
| ----------- | ----------------- | --------- | ------- |
| avatar      | avatar element    | ReactNode |         |
| title       | item title        | ReactNode |         |
| description | item description  | ReactNode |         |
