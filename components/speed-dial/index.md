import Basic from './demo/basic.md'
import Direction from './demo/direction.md'
import Click from './demo/click.md'
import CustomIcon from './demo/custom-icon.md'

# SpeedDial

A floating action button that expands to reveal a set of actions.

## Scenario

When you need a floating action button that can reveal multiple related actions. Commonly used for quick-access actions in the bottom corner of a page.

## Usage

```jsx
import { SpeedDial } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic />
    <Click />
  </Column>
  <Column>
    <Direction />
    <CustomIcon />
  </Column>
</Layout>

## API

### SpeedDial

| Property  | Description                          | Type                                           | Default  |
| --------- | ------------------------------------ | ---------------------------------------------- | -------- |
| icon      | icon for the main FAB button         | ReactNode                                      | `+`      |
| openIcon  | icon shown when the SpeedDial is open | ReactNode                                     | -        |
| direction | direction the actions expand         | enum: `up` &#124; `down` &#124; `left` &#124; `right` | `up`     |
| open      | controlled open state                | boolean                                        | -        |
| trigger   | how the SpeedDial is activated       | enum: `hover` &#124; `click`                   | `hover`  |
| onOpen    | callback when SpeedDial opens        | () => void                                     | -        |
| onClose   | callback when SpeedDial closes       | () => void                                     | -        |
| disabled  | whether the SpeedDial is disabled    | boolean                                        | false    |

### SpeedDial.Action

| Property          | Description                       | Type                                                    | Default |
| ----------------- | --------------------------------- | ------------------------------------------------------- | ------- |
| icon              | icon for the action button        | ReactNode                                               | -       |
| tooltip           | tooltip text                      | string                                                  | -       |
| tooltipPlacement  | tooltip position                  | enum: `left` &#124; `right` &#124; `top` &#124; `bottom` | -       |
| disabled          | whether the action is disabled    | boolean                                                 | false   |
