import Basic from './demo/basic.md'
import Count from './demo/count.md'

# Textarea

For multi-line input.

## Scenario

Comments, etc.

## Usage

```jsx
import { Textarea } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
  <column>
    <Count/>
  </column>
</layout>

## API

| Property     | Description                      | Type                                         | Default |
| ------------ | -------------------------------- | -------------------------------------------- | ------- |
| defaultValue | default value                    | string                                       |         |
| value        | value                            | string                                       |         |
| onChange     | textarea onChange callback       | function: (value, event) => void             |         |
| rows         | rows                             | number                                       |         |
| limit        | limit the number of character    | number                                       | false   |
| counter      | customise the count node         | function: (count: number) => React.ReactNode |         |
| disabled     | disabled the component           | boolean                                      |         |
| style	       | style object of container object |                                              |         |
| className    | className of container           | string                                       |         |

