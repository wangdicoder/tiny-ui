import Basic from './demo/basic.md'
import Card from './demo/card.md'
import Disabled from './demo/disabled.md'

# Tabs

Tabs make it easy to switch between different views.

## Usage

```jsx
import { Tabs } from 'tiny-ui';

const { Panel } = Tabs;
```

## Examples

<layout>
  <column>
    <Basic/>
    <Card/>
  </column>
  <column>
    <Disabled/>
  </column>
</layout>

## API

### Tabs

| Property         | Description                          | Type                                 | Default      |
| ---------------- | ------------------------------------ | ------------------------------------ | ------------ |
| activeKey        | Active tab index (controlled)        | number                               | -            |
| defaultActiveKey | Initial active tab index             | number                               | 0            |
| type             | Tab style type                       | enum: `line` &#124; `card` &#124; `noborder-card` | `line` |
| animated         | Whether to animate tab transitions   | boolean                              | true         |
| direction        | Tab direction                        | enum: `horizontal` &#124; `vertical` | `horizontal` |
| size             | Tab size                             | enum: `sm` &#124; `md` &#124; `lg`   | `md`         |
| onChange         | Callback when active tab changes     | (activeKey: number) => void          | -            |
| style            | Style object of container            | CSSProperties                        | -            |
| className        | ClassName of container               | string                               | -            |

### Tabs.Panel

| Property  | Description                      | Type            | Default |
| --------- | -------------------------------- | --------------- | ------- |
| tab       | Tab header content               | React.ReactNode | -       |
| disabled  | Whether the tab is disabled      | boolean         | false   |
| closable  | Whether the tab can be closed    | boolean         | false   |
| style     | Style object of container        | CSSProperties   | -       |
| className | ClassName of container           | string          | -       |
