import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import IconDemo from './demo/icon.md'
import Size from './demo/size.md'

# Segmented

Segmented control for toggling between a set of options.

## Scenario

Use when you have 2-5 mutually exclusive options and want a more visual alternative to Radio.Group.

## Usage

```jsx
import { Segmented } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <IconDemo/>
  </column>
  <column>
    <Size/>
    <Disabled/>
  </column>
</layout>

## API

| Property     | Description                                 | Type                                                  | Default |
| ------------ | ------------------------------------------- | ----------------------------------------------------- | ------- |
| options      | options for the segmented control           | (string \| number \| SegmentedOption)[]               |         |
| value        | currently selected value (controlled)       | string \| number                                      |         |
| defaultValue | default selected value                      | string \| number                                      |         |
| onChange     | callback when the value changes             | (value: string \| number) => void                     |         |
| block        | fit width to parent                         | boolean                                               | false   |
| disabled     | disable the entire control                  | boolean                                               | false   |
| size         | size of the control                         | 'sm' \| 'md' \| 'lg'                                 | md      |

### SegmentedOption

| Property | Description               | Type      | Default |
| -------- | ------------------------- | --------- | ------- |
| label    | display text              | ReactNode |         |
| value    | option value              | string \| number |  |
| disabled | disable this option       | boolean   | false   |
| icon     | icon node                 | ReactNode |         |
