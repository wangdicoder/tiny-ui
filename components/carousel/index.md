import Basic from './demo/basic.md'
import Arrows from './demo/arrows.md'
import Fade from './demo/fade.md'
import Methods from './demo/methods.md'

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
    <Fade/>
  </column>
  <column>
    <Arrows/>
    <Methods/>
  </column>
</layout>

## API

| Property        | Description                          | Type                                                     | Default    |
| --------------- | ------------------------------------ | -------------------------------------------------------- | ---------- |
| arrows          | Show prev/next arrow buttons         | boolean                                                  | false      |
| autoplay        | Auto-scroll slides                   | boolean                                                  | false      |
| autoplaySpeed   | Delay between auto-scroll (ms)       | number                                                   | 3000       |
| dotPlacement    | Position of dot indicators           | `top` &#124; `bottom` &#124; `left` &#124; `right`       | `bottom`   |
| dots            | Show dot indicators                  | boolean &#124; \{ className?: string \}                   | true       |
| draggable       | Enable drag-to-scroll                | boolean                                                  | false      |
| effect          | Transition effect                    | `scrollx` &#124; `fade`                                  | `scrollx`  |
| easing          | CSS transition timing function       | string                                                   | `ease`     |
| infinite        | Infinite loop                        | boolean                                                  | true       |
| speed           | Animation duration (ms)              | number                                                   | 500        |
| waitForAnimate  | Wait for animation before switching  | boolean                                                  | false      |
| afterChange     | Fires after slide changes            | (current: number) => void                                | -          |
| beforeChange    | Fires before slide changes           | (current: number, next: number) => void                  | -          |
| style           | Style object of container            | CSSProperties                                            | -          |
| className       | ClassName of container               | string                                                   | -          |

### Methods

Access via ref:

```jsx
const ref = useRef();
<Carousel ref={ref}>...</Carousel>

ref.current.next();     // next slide
ref.current.prev();     // previous slide
ref.current.goTo(2);    // go to slide 2
```

| Method                    | Description                                        |
| ------------------------- | -------------------------------------------------- |
| goTo(index, dontAnimate?) | Go to a specific slide. Skip animation if `true`.  |
| next()                    | Go to the next slide.                              |
| prev()                    | Go to the previous slide.                          |
