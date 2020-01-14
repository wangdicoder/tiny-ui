import Block from './demo/block.md'
import Color from './demo/color.md'
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
    <Color/>
    <Size/>
    <ButtonGroup/>
  </column>
  <column>
    <Loading/>
    <Icon/>
    <Disabled/>
    <Block/>
  </column>
</layout>

## API

| Property  | Description                      | Type                               | Default |
| --------- | -------------------------------- | ---------------------------------- | ------- |
| size      | Button size                      | enum: `sm` &#124; `md` &#124; `lg` | `md`    |
| disabled  | disable to select                | boolean                            | false   |
| style	    | style object of container	object | CSSProperties                      | -       |
| className	| className of container           | string                             | -       |
