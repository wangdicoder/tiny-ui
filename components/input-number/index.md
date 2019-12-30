import Basic from './demo/basic.md'
import Size from './demo/size.md'
import Disabled from './demo/disabled.md'

# Input Number

Enter a number within certain range with the mouse or keyboard.

## Scenario

When a numeric value needs to be provided.

## Usage

```jsx
import { InputNumber } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Disabled/>
  </column>
  <column>
    <Size/>
  </column>
</layout>

## API

| Property       | Description                               | Type       | Default |
| -------------- | ----------------------------------------- | ---------- | ------- |
| suffix         | whether display visible button            | boolean    | true    |
| visibleOnClick | callback when clicking the visible button | () => void | -       |
| style	         | style object of container object          |            | -       |
| className	     | className of container                    | string     | -       |

