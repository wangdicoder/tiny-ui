import Basic from './demo/basic.md'
import Gutter from './demo/gutter.md'
import Offset from './demo/offset.md'
import Order from './demo/order.md'
import Alignment from './demo/alignment.md'
import Responsive from './demo/responsive.md'

# Grid

Quickly and easily create layouts with the basic 24-column.

## Usage

```jsx
import { Row, Col } from 'tiny-ui';
```

## Examples

<Basic />
<Gutter />
<Offset />
<Order />
<Alignment />
<Responsive />

## API

### Row

| Property   | Description                                                     | Type                                                                                         | Default |
| ---------- | --------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| gutter     | spacing between grids                                           | number &#124; [number, number]                                                               | 0       |
| gutterSide | gutter padding includes first and end child                     | boolean                                                                                      | false   |
| align      | vertical alignment                                              | enum: `top` &#124; `center` &#124; `bottom`                                                  | -       |
| justify    | horizontal arrangement                                          | enum: `start` &#124; `end` &#124; `center` &#124; `space-around` &#124; `space-between`      | -       |
| style      | style object of container                                       | CSSProperties                                                                                | -       |
| className  | className of container                                          | string                                                                                       | -       |

### Col

| Property  | Description                                      | Type                                          | Default |
| --------- | ------------------------------------------------ | --------------------------------------------- | ------- |
| span      | number of cells to occupy (out of 24)            | number                                        | -       |
| offset    | number of cells to offset from the left          | number                                        | 0       |
| order     | rearrange order                                  | number                                        | 0       |
| xs        | screen < 480px, or a config object               | number &#124; \{ span, offset, order \}         | -       |
| sm        | screen >= 600px, or a config object              | number &#124; \{ span, offset, order \}         | -       |
| md        | screen >= 840px, or a config object              | number &#124; \{ span, offset, order \}         | -       |
| lg        | screen >= 960px, or a config object              | number &#124; \{ span, offset, order \}         | -       |
| xl        | screen >= 1280px, or a config object             | number &#124; \{ span, offset, order \}         | -       |
| xxl       | screen >= 1440px, or a config object             | number &#124; \{ span, offset, order \}         | -       |
| style     | style object of container                        | CSSProperties                                 | -       |
| className | className of container                           | string                                        | -       |
