import Basic from './demo/basic.md'
import Dual from './demo/dual.md'
import Vertical from './demo/vertical.md'
import Dots from './demo/dots.md'
import Marker from './demo/marker.md'
import CustomisedTooltip from './demo/customised-tooltip.md'
import Disabled from './demo/disabled.md'
import TooltipVisible from './demo/tooltip-visible.md'
import Track from './demo/track.md'

# Slider

Drag the slider within a fixed range.

## Scenario

To input a value in a range.

## Usage

```jsx
import { Slider } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Dual/>
    <Dots/>
    <Marker/>
    <Disabled/>
  </column>
  <column>
    <Vertical/>
    <CustomisedTooltip/>
    <TooltipVisible/>
    <Track/>
  </column>
</layout>

## API

| Property          | Description                                                                                   | Type                                  | Default       |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------- | ------------- |
| value             | the value of slider.                                                                          | number &#124; [number, number]        |               |
| defaultValue      | the default value of slider.                                                                  | number &#124; [number, number]        |               |
| min               | the minimum value the slider can slide to.                                                    | number                                | 0             |
| max               | the maximum value the slider can slide to.                                                    | number                                | 100           |
| marks             | tick mark of Slider.                                                                          | { number: ReactNode } &#124; { number: { style: CSSProperty, label: ReactNode } }   |     |
| dots              | display dots on the track.                                                                    | boolean                               | false         |
| direction         | the slider direction.                                                                         | enum: `horizontal` &#124; `verical`   | `horizontal`  |
| step              | the granularity the slider can step through values.                                           | number                                | 1             |
| disabled          | the slider will not be interactive if set true.                                               | boolean                               | false         |
| track             | determine whether display track.                                                              | boolean                               | false         |
| tooltipVisible    | if true, Tooltip will show always, or it will not show anyway, even if dragging or hovering.  | boolean                               |               |
| tooltipPlacement  | set Tooltip display position.                                                                 | `Placement`                           | `top`         |
| tipFormatter      | display the value format in Tooltip.                                                          | (value) => ReactNode                  |               |
| onChange          | callback function that is fired when the user changes the slider's value.                     | (value) => void                       |               |
| onAfterChange     | callback when `onmouseup` is fired.                                                           | (value) => void                       |               |
| style	            | style object of container	object.                                                             | CSSProperties                         |               |
| className	        | className of container.                                                                       | string                                |               |
