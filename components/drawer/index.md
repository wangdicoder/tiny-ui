import Basic from './demo/basic.md'
import Placement from './demo/placement.md'
import Level from './demo/multi-level.md'

# Drawer

A panel which slides in from the edge of the screen.

## Scenario

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.

- Use a Form to create or edit a set of information.
- Processing sub tasks. When sub tasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.
- When the same Form is needed in multiple places.

## Usage

```jsx
import { Drawer } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Level/>
  </column>
  <column>
    <Placement/>
  </column>
</layout>

## API

| Property          | Description                                           | Type                                                      | Default   |
| ----------------- | ----------------------------------------------------- | --------------------------------------------------------- | --------- |
| placement         | The placement of the Drawer                           | enum: `top` &#124; `bottom` &#124; `left` &#124; `right`  | `right`   |
| size              | Drawer dialog width or height                         | number &#124; string                                      | 256       |
| visible           | Whether the Drawer dialog is visible or not           | boolean                                                   | -         |
| header            | Drawer header                                         | ReactNode                                                 | -         | 
| footer            | Drawer footer                                         | ReactNode                                                 | -         | 
| closable          | Display a close button                                | boolean                                                   | `true`    | 
| unmountOnClose    | Whether unmount child components when closing drawer  | boolean                                                   | `true`    | 
| style	            | style object of container	object                      | CSSProperties                                             | -         |
| className	        | className of container                                | string                                                    | -         |
