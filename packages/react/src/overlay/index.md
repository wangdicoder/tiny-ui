import Basic from './demo/basic.md'
import Blurred from './demo/blurred.md'
import MaskTypes from './demo/mask-types.md'
import CustomContent from './demo/custom-content.md'

# Overlay

A mask layer that covers the page content.

## Scenario

When you need a mask layer to cover the page content, such as when displaying a modal dialog, drawer, or any floating panel that requires a backdrop. **Overlay** provides a low-level building block with fade animation, scroll locking, and multiple mask types.

## Usage

```jsx
import { Overlay } from 'tiny-design';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <MaskTypes/>
  </Column>
  <Column>
    <Blurred/>
    <CustomContent/>
  </Column>
</Layout>

## API

| Property       | Description                                    | Type                                                          | Default   |
| -------------- | ---------------------------------------------- | ------------------------------------------------------------- | --------- |
| isShow         | whether the overlay is visible                 | boolean                                                       | false     |
| blurred        | whether to apply a blurred backdrop effect     | boolean                                                       | false     |
| unmountOnExit  | whether to unmount when hidden                 | boolean                                                       | true      |
| zIndex         | z-index of the overlay                         | number                                                        | 1000      |
| type           | mask type                                      | enum: `default` &#124; `inverted` &#124; `none`               | `default` |
| clickCallback  | callback when the overlay is clicked           | (e: MouseEvent) => void                                       | -         |
| onEnter        | callback before enter transition starts        | () => void                                                    | -         |
| onEntered      | callback after enter transition finishes       | () => void                                                    | -         |
| onExit         | callback before exit transition starts         | () => void                                                    | -         |
| onExited       | callback after exit transition finishes        | () => void                                                    | -         |
| children       | content rendered inside the overlay            | ReactNode                                                     | -         |
| style          | style object of container                      | CSSProperties                                                 | -         |
| className      | className of container                         | string                                                        | -         |
