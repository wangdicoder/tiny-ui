import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Loading from './demo/loading.md'
import Size from './demo/size.md'
import Text from './demo/text.md'

# Switch

Switch is used for switching between two opposing states.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.

## Usage

```jsx
import { Switch } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Text/>
    <Size/>
  </column>
  <column>
    <Loading/>
    <Disabled/>
  </column>
</layout>

## API
