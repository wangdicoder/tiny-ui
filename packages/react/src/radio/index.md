import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Group from './demo/group.md'

# Radio

A single entry component. If there are only two options, consider using the `Switch` component.

## Scenario

- Used to select a single state from multiple options.
- The difference from Select is that Radio is visible to the user and can facilitate the comparison of choice, which means there shouldn't be too many of them.

## Usage

```jsx
import { Radio } from 'tiny-ui';

const { Group } = Radio;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Disabled/>
  </Column>
  <Column>
    <Group/>
  </Column>
</Layout>

## API

### Radio

| Property       | Description                         | Type                             | Default |
| -------------- | ----------------------------------- | -------------------------------- | ------- |
| value          | value used when in a Radio.Group    | string &#124; number             | -       |
| name           | the name attribute of input         | string                           | -       |
| defaultChecked | initial checked state               | boolean                          | false   |
| checked        | controlled checked state            | boolean                          | -       |
| disabled       | whether disabled                    | boolean                          | false   |
| onChange       | callback when state changes         | (e: ChangeEvent) => void         | -       |
| style          | style object of container           | CSSProperties                    | -       |
| className      | className of container              | string                           | -       |

### Radio.Group

| Property     | Description                       | Type                                      | Default |
| ------------ | --------------------------------- | ----------------------------------------- | ------- |
| name         | the name attribute for all radios | string                                    | -       |
| defaultValue | initial selected value            | string &#124; number                      | -       |
| value        | controlled selected value         | string &#124; number                      | -       |
| onChange     | callback when selection changes   | (value: string &#124; number) => void     | -       |
| disabled     | whether disabled all radios       | boolean                                   | false   |
