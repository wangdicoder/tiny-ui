import Basic from './demo/basic.md'
import Placement from './demo/placement.md'
import Trigger from './demo/trigger.md'
import Controlled from './demo/controlled.md'

# Popover

The floating card popped by clicking or hovering.

## Scenario

A simple popup menu to provide extra information or operations.

Comparing with `Tooltip`, besides information `Popover` can also provide action elements like links and buttons.

## Usage

```jsx
import { Popover } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Placement/>
  </Column>
  <Column>
    <Trigger/>
    <Controlled/>
  </Column>
</Layout>

## API

| Property        | Description                                         | Type                                                                                                                                                                            | Default   |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title           | title of the popover                                | ReactNode                                                                                                                                                                       | -         |
| content         | content of the popover                              | ReactNode                                                                                                                                                                       | -         |
| placement       | position of the popover                             | enum: `top` &#124; `top-start` &#124; `top-end` &#124; `bottom` &#124; `bottom-start` &#124; `bottom-end` &#124; `left` &#124; `left-start` &#124; `left-end` &#124; `right` &#124; `right-start` &#124; `right-end` | `top`     |
| trigger         | trigger mode                                        | enum: `hover` &#124; `focus` &#124; `click` &#124; `contextmenu` &#124; `manual`                                                                                               | `hover`   |
| visible         | controlled visibility                               | boolean                                                                                                                                                                         | -         |
| defaultVisible  | initial visibility                                  | boolean                                                                                                                                                                         | false     |
| onVisibleChange | callback when visibility changes                    | (visible: boolean) => void                                                                                                                                                      | -         |
| theme           | background theme                                    | enum: `light` &#124; `dark`                                                                                                                                                     | `light`   |
| arrow           | whether to display an arrow                         | boolean                                                                                                                                                                         | true      |
| offset          | distance between popup and trigger                  | number                                                                                                                                                                          | -         |
| mouseEnterDelay | delay before showing on hover (seconds)             | number                                                                                                                                                                          | -         |
| mouseLeaveDelay | delay before hiding on mouse leave (seconds)        | number                                                                                                                                                                          | -         |
| disabled        | whether disabled                                    | boolean                                                                                                                                                                         | false     |
| style           | style object of container                           | CSSProperties                                                                                                                                                                   | -         |
| className       | className of container                              | string                                                                                                                                                                          | -         |
