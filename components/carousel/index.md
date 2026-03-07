import Basic from './demo/basic.md'

# Carousel

A carousel component for cycling through elements like a slideshow.

## Usage

```jsx
import { Carousel } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
</layout>

## API

### Carousel

| Property         | Description                        | Type                                              | Default    |
| ---------------- | ---------------------------------- | ------------------------------------------------- | ---------- |
| dots             | Whether to show dot indicators     | boolean                                           | true       |
| arrows           | Whether to show prev/next arrows   | boolean                                           | true       |
| autoplay         | Whether to scroll automatically    | boolean                                           | true       |
| interval         | Delay between slides (ms)          | number                                            | 3000       |
| animatedDuration | Animation duration (ms)            | number                                            | 500        |
| dotPosition      | Position of dots                   | enum: `top` &#124; `bottom` &#124; `left` &#124; `right` | `bottom` |
| easing           | CSS timing function                | enum: `linear` &#124; `ease` &#124; `ease-in` &#124; `ease-out` &#124; `ease-in-out` | `linear` |
| style            | Style object of container          | CSSProperties                                     | -          |
| className        | ClassName of container             | string                                            | -          |

### Carousel.Item

| Property  | Description                | Type            | Default |
| --------- | -------------------------- | --------------- | ------- |
| style     | Style object of container  | CSSProperties   | -       |
| className | ClassName of container     | string          | -       |
