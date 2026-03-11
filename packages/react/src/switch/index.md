import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Loading from './demo/loading.md'
import Size from './demo/size.md'
import Text from './demo/text.md'

# Switch

Switch is used for switching between two opposing states.

## When To Use

- If you need to represent the switching between two states or on-off state.
- The difference between Switch and Checkbox is that Switch will trigger a state change directly when you toggle it, while Checkbox is generally used for state marking, which should work in conjunction with submit operation.

## Usage

```jsx
import { Switch } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Text/>
    <Size/>
  </Column>
  <Column>
    <Loading/>
    <Disabled/>
  </Column>
</Layout>

## API

| Property       | Description                             | Type                                          | Default |
| -------------- | --------------------------------------- | --------------------------------------------- | ------- |
| defaultChecked | initial checked state                   | boolean                                       | false   |
| checked        | controlled checked state                | boolean                                       | -       |
| disabled       | whether disabled                        | boolean                                       | false   |
| loading        | loading state                           | boolean                                       | false   |
| size           | switch size                             | enum: `sm` &#124; `md` &#124; `lg`            | `md`    |
| checkedText    | content when checked                    | ReactNode                                     | -       |
| uncheckedText  | content when unchecked                  | ReactNode                                     | -       |
| onChange       | callback when state changes             | (checked: boolean, e: MouseEvent) => void     | -       |
| onClick        | click callback                          | (checked: boolean, e: MouseEvent) => void     | -       |
| style          | style object of container               | CSSProperties                                 | -       |
| className      | className of container                  | string                                        | -       |
