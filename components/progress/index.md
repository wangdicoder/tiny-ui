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

```jsx
import { Progress } from 'tiny-ui';

const { Bar, Circle } = Progress;
```

## Examples

<Layout>
  <Column>
    <ProgressBar/>
    <ProgressCircle/>
    <InternalText/>
    <Active/>
    <LinearGradient/>
  </Column>
  <Column>
    <Dynamic/>
    <CustomText/>
    <Reverse/>
    <SquareLinecaps/>
  </Column>
</Layout>

## API

| Property  | Description                      | Type                               | Default |
| --------- | -------------------------------- | ---------------------------------- | ------- |
| size      | selection size                   | enum: `sm` &#124; `md` &#124; `lg` | `md`    |
| disabled  | disable to select                | boolean                            | false   |
| style	    | style object of container	object | CSSProperties                      | -       |
| className	| className of container           | string                             | -       |

