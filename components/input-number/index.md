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

| Property      | Description                                           | Type                                  | Default                   |
| ------------- | ----------------------------------------------------- | ------------------------------------- | ------------------------- |
| min           | Min value                                             | number                                | Number.NEGATIVE_INFINITY  |
| max           | Max value                                             | number                                | Number.POSITIVE_INFINITY  |
| step          | Increased or decreased, it can be decimal or integer  | number                                | 1                         |
| defaultValue  | Initial value                                         | number                                | 0                         |
| value         | Current value                                         | number                                | -                         |
| onChange      | The callback when the value is changed.               | (value, e) => void                    | -                         |
| size          | Input box size                                        | enum: `sm` &#124; `md` &#124; `lg`    | `md`                      |
| disabled      | Disable the input                                     | boolean                               | false                     |
| controls      | Always display the controller                         | boolean                               | false                     |
| style	        | Style object of container object                      |                                       | -                         |
| className	    | ClassName of container                                | string                                | -                         |

