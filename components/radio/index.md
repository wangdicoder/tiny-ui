import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Group from './demo/group.md'

# Radio

A single entry component. If there are only two options, consider using the `Switch` component.

## Scenario

- Used to select a single state from multiple options.
- The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.

## Usage

```jsx
import { Radio } from 'tiny-ui';

const { Group } = Radio;
```

## Examples

<layout>
  <column>
    <Basic/>
    <Disabled/>
  </column>
  <column>
    <Group/>
  </column>
</layout>

## API
