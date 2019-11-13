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


