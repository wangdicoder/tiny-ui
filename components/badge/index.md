import Basic from './demo/basic.md'
import Custom from './demo/custom.md'
import Dot from './demo/dot.md'
import Overflow from './demo/overflow.md'
import Standalone from './demo/standalone.md'

# Badge

Small numerical value or status descriptor for UI elements.

## Scenario

Badge normally appears in proximity to notifications or user avatars with eye-catching appeal, typically displaying unread messages count.

## Usage

```jsx
import { Badge } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Overflow/>
    <Standalone/>
  </column>
  <column>
    <Dot/>
    <Custom/>
  </column>
</layout>

## API

| Property      | Description                                                       | Type              | Default   |
| ------------- | ----------------------------------------------------------------- | ----------------- | --------- |
| count         | the number to show in badge                                       | ReactNode         |           |
| color         | background color                                                  | string            | #f2453d   |
| max           | max count to show                                                 | number            | 99        |
| dot           | display a dot only                                                | boolean           | false     |
| processing    | display wave effect                                               | boolean           | false     |
| showZero      | when value is equal to zero, the badge will be hidden by default  | boolean           | false     |
| title         | text to show when hovering over the badge                         | string            |           |
| badgeStyle    | internal badge style                                              | CSSProperties     |           |

