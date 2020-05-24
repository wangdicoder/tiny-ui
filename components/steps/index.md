import Basic from './demo/basic.md'
import Icon from './demo/icon.md'
import Placement from './demo/placement.md'
import Vertical from './demo/vertical.md'
import Switch from './demo/switch.md'
import Clickable from './demo/clickable.md'

# Steps

`Steps` convey progress through numbered steps. It provides a wizard-like workflow.

## Scenario

When a given task is complicated or has a certain sequence in the series of sub tasks, we can decompose it into several steps to make things easier.

## Usage

```jsx
import { Steps } from 'tiny-ui';

const { Step } = Steps;
```

## Examples

<Basic />
<Icon />
<Placement />
<Vertical />
<Switch />
<Clickable />

## API

### Steps

The whole of the step bar.

| Property          | Description                                                               | Type                                                              | Default       |
| ----------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| current           | set the current step.                                                     | number                                                            | -             |
| defaultCurrent    | display a circle skeleton.                                                | number                                                            | 0             |
| direction         | determine the direction of the step bar.                                  | enum: `horizontal` &#124; `vertical`                              | `horizontal`  |
| status            | current step's status.                                                    | enum: `wait` &#124; `process`  &#124; `finish`  &#124; `error`    | `process`     |
| labelPlacement    | place title and description with `horizontal` or `vertical` direction.    | enum: `horizontal` &#124; `vertical`                              | `vertical`    |
| onChange          | trigger when Step is changed.                                             | (current: number) => void                                         | -             |

### Steps.Step

A single step in the step bar.

| Property          | Description                                       | Type                          | Default   |
| ----------------- | ------------------------------------------------- | ----------------------------- | --------- |
| title             | title of the step.                                | ReactNode                     | -         |
| description       | description of the step.                          | ReactNode                     | -         |
| icon              | customise the step's icon.                        | ReactNode                     | -         |
| status            | replace `Steps`'s status.                         | enum: `wait` &#124; `process`  &#124; `finish`  &#124; `error`    | -     |
| disabled          | disable the click event.                          | boolean                       | -         |
