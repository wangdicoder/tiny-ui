import Block from './demo/block.md'
import MoreTypes from './demo/more-types.md'
import Disabled from './demo/disabled.md'
import ButtonGroup from './demo/group.md'
import Icon from './demo/icon.md'
import Loading from './demo/loading.md'
import Size from './demo/size.md'
import Type from './demo/type.md'

# Button

To trigger an operation.

## Scenario

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Usage

```jsx
import { Button } from 'tiny-ui';

const { Group } = Button;
```

## Examples

<layout>
  <column>
    <Type/>
    <MoreTypes/>
    <Size/>
    <ButtonGroup/>
    <Loading/>
  </column>
  <column>
    <Icon/>
    <Disabled/>
    <Block/>
  </column>
</layout>

## API

| Property  | Description                               | Type                                  | Default   |
| --------- | ----------------------------------------- | ------------------------------------- | --------- |
| btnType   | button type                               | enum: `default` &#124; `primary` &#124; `outline` &#124; `ghost` &#124; `link` &#124; `info` &#124; `successs` &#124; `warning` &#124; `danger` | `default`    |
| loading   | set the loading status of button          | boolean                               | false     |
| block     | fit button width to its parent width      | boolean                               | false     |
| size      | button size                               | enum: `sm` &#124; `md` &#124; `lg`    | `md`      |
| disabled  | disabled state of button                  | boolean                               | false     |
| round     | rounded button                            | boolean                               | false     |
| icon      | render an icon on the left of the text    | React.ReactNode                       | -         |
| style	    | style object of container	object          | CSSProperties                         | -         |
| className	| className of container                    | string                                | -         |
