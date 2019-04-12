# Progress

Display the current progress of an operation flow.

## Scenario
If it will take a long time to complete an operation, you can use Progress to show the current progress and status.
- When an operation will interrupt the current interface, or it needs to run in the background for more than 2 seconds.
- When you need to display the completion percentage of an operation.

## Usage

```js
import { Progress } from 'tiny-ui';

const { Bar, Circle } = Progress;
```

## Examples

<!--{demo}-->

## API

| Property  | Description                      | Type                          | Default |
| --------- | -------------------------------- | ----------------------------- | ------- |
| size      | selection size                   | enum: `sm` `md` `lg`          | `md`    |
| disabled  | disable to select                | boolean                       | false   |
| style	    | style object of container	object |                               | -       |
| className	| className of container           | string                        | -       |

