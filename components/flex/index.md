import Basic from './demo/basic.md'
import Align from './demo/align.md'
import Gap from './demo/gap.md'
import Wrap from './demo/wrap.md'

# Flex

A flexbox container component using CSS `gap` for spacing with no child wrapping.

## Scenario

Use Flex when you need a lightweight flexbox layout without wrapping each child in additional elements.

## Usage

```jsx
import { Flex } from 'tiny-ui';
```

## Examples

<Basic />
<Align />
<Gap />
<Wrap />

## API

| Property  | Description                      | Type                                                                 | Default |
| --------- | -------------------------------- | -------------------------------------------------------------------- | ------- |
| vertical  | Flex direction column            | `boolean`                                                            | `false` |
| wrap      | CSS flex-wrap                    | `nowrap` &#124; `wrap` &#124; `wrap-reverse`                         | -       |
| justify   | CSS justify-content              | `string`                                                             | -       |
| align     | CSS align-items                  | `string`                                                             | -       |
| gap       | Gap between items                | `sm` &#124; `md` &#124; `lg` &#124; `number` &#124; `string`        | -       |
| flex      | CSS flex shorthand               | `string`                                                             | -       |
| component | Custom element type              | `React.ElementType`                                                  | `div`   |
