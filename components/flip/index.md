import Basic from './demo/basic.md'
import Direction from './demo/direction.md'

# Flip

A flip box which can display two side content.

## Scenario

If one thing with extra content which is not important, you can display the main the content on the front side and satellite information showing on the back side.

## Usage

```jsx
import { Flip } from 'tiny-ui';

const { Item } = Flip;
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
  <column>
    <Direction/>
  </column>
</layout>

## API

| Property  | Description             | Type                                    | Default      |
| --------- | ----------------------- | --------------------------------------- | ------------ |
| width     | the container's width   | number &#124; string                    |              |
| height    | the container's height  | number &#124; string                    |              |
| direction | flip direction          | enum: `horizontal` &#124; `vertical`    | `horizontal` |
| reverse   | reverse direction       | boolean                                 | false        |
