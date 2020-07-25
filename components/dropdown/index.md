import Basic from './demo/basic.md'
import Other from './demo/other.md'
import Cascade from './demo/cascade.md'
import Placement from './demo/placement.md'
import Arrow from './demo/arrow.md'
import Trigger from './demo/trigger.md'
import Close from './demo/close.md'

# Dropdown

A drop-down list is a graphical control element, similar to a list box.

## Scenario

When there are more than a few options to choose from, you can wrap them in a `Dropdown`. By hovering or clicking on the trigger, a dropdown menu will appear, which allows you to choose an option and execute the relevant action.

## Usage

```jsx
import { Dropdown } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic />
    <Other />
    <Cascade />
    <Arrow />
  </column>
  <column>
    <Placement />
    <Trigger />
    <Close />
  </column>
</layout>

## API

| Property          | Description                           | Type                          | Default   |
| ----------------- | ------------------------------------- | ----------------------------- | --------- |
| disabled          | whether the dropdown menu is disabled | boolean                       | false     |
| trigger           | trigger mode                          | enum: `click` &#124; `hover`  | `hover`   |
| placement         | placement of popup menu               | enum: `top-start` &#124; `top` &#124; `end` &#124; `bottom-start` &#124; `bottom` &#124; `bottom-end` | `bottom-start`    |
| overlay           | dropdown menu                         | [Menu](/components/menu)      | -         |
| visible           | whether the dropdown menu is visible  | boolean                       | -         |
| arrow             | display the dropdown arrow            | boolean                       | false     |
| onVisibleChange   | allow to get millisecond value        | (visible: boolean) => void    | -         |
