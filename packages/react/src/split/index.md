import Horizontal from './demo/horizontal.md'
import Vertical from './demo/vertical.md'
import Nest from './demo/nest.md'
import Step from './demo/step.md'

# Split

Divide one pane into two parts that can be dragged to adjust width or height.

## Scenario

When there multiple contents that need to display together, but some of them need more space to show.

## Usage

```jsx
import { Split } from 'tiny-ui';
```

## Examples

<Vertical/>
<Horizontal/>
<Nest/>
<Step/>

## API

| Property          | Description                               | Type                                  | Default       |
| ----------------- | ----------------------------------------- | ------------------------------------- | ------------- |
| mode              | split mode                                | enum: `horizontal` &#124; `vertical`  | `vertical`    |
| disabled          | disable flag	                            | boolean                               | false         |
| min               | minimum width / height of the target pane | number &#124; string                  | 50            |
| max               | maximum width / height of the target pane | number &#124; string                  | 50            |
| size              | size of target pane                       | number &#124; string                  | -             |
| defaultSize       | default size of target pane               | number &#124; string                  | -             |
| step              | drag step                                 | number                                | -             |
| resizerProps      | resizer props                             | JSX.IntrinsicElements['div']          | -             |
| resizerSize       | resizer size                              | number                                | 6             |
| onChange          | callback when the size changed            | (size: number) => void                | -             |
| onDragStarted     | callback when the resizer starts dragging | () => void                            | -             |
| onDragFinished    | callback when the resizer ends dragging   | () => void                            | -             |
