import Active from './demo/active.md'
import CustomText from './demo/custom-text.md'
import Dynamic from './demo/dynamic.md'
import InternalText from './demo/internal-text.md'
import LinearGradient from './demo/linear-gradient.md'
import ProgressBar from './demo/progress-bar.md'
import ProgressCircle from './demo/progress-circle.md'
import Reverse from './demo/reverse.md'
import SquareLinecaps from './demo/square-linecaps.md'

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

<layout>
  <column>
    <ProgressBar/>
    <ProgressCircle/>
    <InternalText/>
    <Active/>
    <LinearGradient/>
  </column>
  <column>
    <Dynamic/>
    <CustomText/>
    <Reverse/>
    <SquareLinecaps/>
  </column>
</layout>

## API

| Property  | Description                      | Type                          | Default |
| --------- | -------------------------------- | ----------------------------- | ------- |
| size      | selection size                   | enum: `sm` `md` `lg`          | `md`    |
| disabled  | disable to select                | boolean                       | false   |
| style	    | style object of container	object |                               | -       |
| className	| className of container           | string                        | -       |

