# Select

Select component to select value from options.

## Scenario

- A dropdown menu for displaying choices.
- Use when selecting from a list of options where only one option can be chosen at a time.

## Usage

```jsx
import { Select } from 'tiny-ui';

const { Option, OptGroup } = Select;
```

## API

### Select

| Property                | Description                                      | Type                                  | Default |
| ----------------------- | ------------------------------------------------ | ------------------------------------- | ------- |
| value                   | current selected value                           | string &#124; string[]                | -       |
| defaultValue            | initial selected value                           | string &#124; string[]                | -       |
| onSelect                | called when a option is selected                 | (value: string &#124; string[]) => void | -     |
| placeholder             | placeholder of select                            | string                                | -       |
| disabled                | whether disabled select                          | boolean                               | false   |
| defaultOpen             | initial open state of dropdown                   | boolean                               | false   |
| open                    | controlled open state of dropdown                | boolean                               | -       |
| onDropdownVisibleChange | called when dropdown open state changes          | (open: boolean) => void               | -       |
| dropdownStyle           | style of dropdown menu                           | CSSProperties                         | -       |
| style                   | style object of container                        | CSSProperties                         | -       |
| className               | className of container                           | string                                | -       |

### Option

| Property  | Description                | Type      | Default |
| --------- | -------------------------- | --------- | ------- |
| value     | value of the option        | string    | -       |
| disabled  | whether disabled           | boolean   | false   |

### OptGroup

| Property | Description         | Type   | Default |
| -------- | ------------------- | ------ | ------- |
| label    | group label         | string | -       |
