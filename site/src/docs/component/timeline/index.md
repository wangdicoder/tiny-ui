# Timeline

Display a timeline.

## Scenario

- When a series of information needs to be ordered by time (ascending or descending).

- When you need a timeline to make a visual connection.

## Usage

```js
import { Timeline } from 'tiny-ui';

const { Item } = Timeline;
```

## Examples

<!--{demo}-->

## API

### **Timeline**

| Property  | Description                      | Type                          | Default      |
| --------- | -------------------------------- | ----------------------------- | ------------ |
| position  | position of timeline bar         | enum: `left` `center`         | `left`       |
| style	    | style object of container	object |                               | -            |
| className	| className of container           | string                        | -            |

### **Timeline.Item**

| Property  | Description                      | Type                          | Default      |
| --------- | -------------------------------- | ----------------------------- | ------------ |
| dot       | customize timeline dot           | `string` `ReactNode`          | -            |
| dotStyle	| style object of dot object       |                               | -            |
| style	    | style object of container	object |                               | -            |
| className	| className of container           | string                        | -            |
