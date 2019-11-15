import Basic from './demo/basic.md'
import Customised from './demo/customised.md'
import NoDesc from './demo/no-desc.md'

# Empty

Empty state placeholder.

## When To Use

- When there is no data provided, display for friendly tips.
- User tutorial to create something in fresh new situation.

## Usage

```jsx
import { Empty } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Customised/>
  </column>
  <column>
    <NoDesc/>
  </column>
</layout>

## API

| Property    | Description            | Type                                         | Default |
| ----------- | ---------------------- | -------------------------------------------- | ------- |
| image       | Customised image       | string &#124; ReactNode                      | -       |
| imageStyle  | style of image         | CSSProperties                                | -       |
| description | Customised description | boolean &#124; string &#124; React.ReactNode | -       |
| descStyle	  | style of description   | CSSProperties                                | -       |
