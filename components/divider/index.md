import AlignTitle from './demo/align-title.md'
import Horizontal from './demo/horizontal.md'
import Vertical from './demo/vertical.md'

# Divider

A divider line separates different content.

## Scenario

- Divide sections of article.
- Divide inline text and links such as the operation column of table.

## Usage

```jsx
import { Divider } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Horizontal/>
    <Vertical/>
  </column>
  <column>
    <AlignTitle/>
  </column>
</layout>

## API

| Property  | Description                      | Type                                           | Default      |
| --------- | -------------------------------- | ---------------------------------------------- | ------------ |
| type      | direction type of divider        | enum: `horizontal` &#124; `vertical`           | `horizontal` |
| dashed    | whether line is dashed           | boolean                                        | false        |
| align     | position of title inside divider | enum: `left` &#124; `right` &#124; `center`    | `center`     |
| style	    | style object of container	object | CSSProperties                                  | -            |
| className	| className of container           | string                                         | -            |
