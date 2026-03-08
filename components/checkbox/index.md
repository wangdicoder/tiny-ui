import Basic from './demo/basic.md'
import CheckAll from './demo/check-all.md'
import Disabled from './demo/disabled.md'
import Group from './demo/group.md'

# Checkbox

A multiple entry component.

## Scenario

- Used for selecting multiple values from several options.
- If you use only one checkbox, it is the same as using Switch to toggle between two states. The difference is that Switch will trigger the state change directly, but Checkbox just marks the state as changed and this needs to be submitted.

## Usage

```jsx
import { Checkbox } from 'tiny-ui';

const { Group } = Checkbox;
```

## Examples

<layout>
  <column>
    <Basic/>
    <Group/>
  </column>
  <column>
    <CheckAll/>
    <Disabled/>
  </column>
</layout>

## API

### Checkbox

| Property       | Description                              | Type                                     | Default |
| -------------- | ---------------------------------------- | ---------------------------------------- | ------- |
| value          | only required when used with Group       | string                                   | -       |
| defaultChecked | initial checked state                    | boolean                                  | false   |
| checked        | controlled checked state                 | boolean                                  | -       |
| indeterminate  | half-checked (visual only) state         | boolean                                  | false   |
| disabled       | whether disabled                         | boolean                                  | false   |
| onChange       | callback when state changes              | (e: ChangeEvent) => void                 | -       |
| style          | style object of container                | CSSProperties                            | -       |
| className      | className of container                   | string                                   | -       |

### Checkbox.Group

| Property     | Description                        | Type                             | Default |
| ------------ | ---------------------------------- | -------------------------------- | ------- |
| defaultValue | default selected values            | string[]                         | -       |
| value        | controlled selected values         | string[]                         | -       |
| onChange     | callback when selection changes    | (checkedValues: string[]) => void| -       |
| disabled     | whether disabled all checkboxes    | boolean                          | false   |
