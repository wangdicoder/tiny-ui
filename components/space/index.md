import Basic from './demo/basic.md'
import Vertical from './demo/vertical.md'
import Size from './demo/size.md'
import Align from './demo/align.md'

# Space

Set components spacing.

## Scenario

Avoid components clinging together and set a unified space.

## Usage

```jsx
import { Space } from 'tiny-ui';
```

## Examples

<Basic />
<Vertical />
<Size />
<Align />

## API

| Property  | Description       | Type                                                          | Default       |
| --------- | ----------------- | ------------------------------------------------------------- | ------------- |
| align     | align items       | enum: `start` &#124; `end` &#124; `center` &#124; `baseline`  | `center`      |
| direction | space direction	| enum: `horizontal` &#124; `vertical`                          | `horizontal`  |
| size      | space size        | enum: `sm` &#124; `md` &#124; `lg` &#124; `number`            | `sm`          |

