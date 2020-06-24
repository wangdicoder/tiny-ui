import Accordion from './demo/accordion.md'
import Basic from './demo/basic.md'
import Borderless from './demo/borderless.md'
import Deletable from './demo/deletable.md'
import Nested from './demo/nested.md'

# Collapse

A content area which can be collapsed and expanded.

## Scenario

Can be used to group or hide complex regions to keep the page clean.

`Accordion` is a special kind of `Collapse`, which allows only one panel to be expanded at a time.

## Usage

```jsx
import { Collapse } from 'tiny-ui';

const { Panel } = Collapse;
```

## Examples

<layout>
  <column>
    <Basic/>
    <Accordion/>
    <Nested/>
  </column>
  <column>
    <Borderless/>
    <Deletable/>
  </column>
</layout>

## API

### Collapse

| Property          | Description                                               | Type                              | Default   |
| ----------------- | --------------------------------------------------------- | --------------------------------- | --------- |
| defaultActiveKey  | initial active panel                                      | string &#124; string[]            | []        |
| activeKey         | keys of the active panel                                  | string &#124; string[]            | -         |
| accordion         | accordion mode                                            | boolean                           | false     |
| deletable         | panel can be deleted                                      | boolean                           | false     |
| showArrow         | display arrow icon                                        | boolean                           | true      |
| bordered          | render borders around the collapse block                  | boolean                           | true      |
| onChange          | callback function executed when active panel is changed   | (keys: string | string[]) => void | -         |

### Collapse.Panel

| Property          | Description                                   | Type                              | Default   |
| ----------------- | --------------------------------------------- | --------------------------------- | --------- |
| itemKey           | unique key identifying the panel              | string                            | -         |
| header            | title of the panel                            | ReactNode                         | -         |
| disabled          | panel cannot be opened or closed if set true  | boolean                           | -         |
| extra             | extra element in the corner                   | ReactNode                         | -         |
| deletable         | whether the panel can be deleted              | boolean                           | -         |
| showArrow         | display arrow icon                            | boolean                           | -         |
| onHeaderOnClick   | callback when the header is clicked           | (e: React.MouseEvent) => void     | -         |

