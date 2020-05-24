import Basic from './demo/basic.md'
import Centered from './demo/centered.md'
import Color from './demo/color.md'
import Customised from './demo/customised.md'

# Timeline

Display a timeline.

## Scenario

- When a series of information needs to be ordered by time (ascending or descending).

- When you need a timeline to make a visual connection.

## Usage

```jsx
import { Timeline } from 'tiny-ui';

const { Item } = Timeline;
```

## Examples

<layout>
  <column>
    <Basic/>
    <Customised/>
  </column>
  <column>
    <Color/>
    <Centered/>
  </column>
</layout>

## API

### Timeline

| Property  | Description                      | Type                           | Default      |
| --------- | -------------------------------- | ------------------------------ | ------------ |
| position  | position of timeline bar         | enum: `left` &#124; `center`   | `left`       |
| style	    | style object of container	object |                                | -            |
| className	| className of container           | string                         | -            |

### Timeline.Item

| Property  | Description                      | Type                           | Default      |
| --------- | -------------------------------- | ------------------------------ | ------------ |
| dot       | customize timeline dot           | `string` &#124; `ReactNode`    | -            |
| dotStyle	| style object of dot object       |                                | -            |
| style	    | style object of container	object |                                | -            |
| className	| className of container           | string                         | -            |
