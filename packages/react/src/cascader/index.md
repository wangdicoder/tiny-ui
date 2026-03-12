import Basic from './demo/basic.md'
import ChangeOnSelect from './demo/change-on-select.md'
import DefaultValue from './demo/default-value.md'
import Hover from './demo/hover.md'
import Disabled from './demo/disabled.md'
import Sizes from './demo/sizes.md'

# Cascader

A multi-level dropdown for selecting hierarchical data.

## Scenario

Used to select data from a hierarchy such as location (country > state > city) or category trees.

## Usage

```jsx
import { Cascader } from 'tiny-design';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Hover/>
    <Sizes/>
  </Column>
  <Column>
    <DefaultValue/>
    <Disabled/>
    <ChangeOnSelect/>
  </Column>
</Layout>

## API

| Property               | Description                         | Type                                                      | Default        |
| ---------------------- | ----------------------------------- | --------------------------------------------------------- | -------------- |
| options                | hierarchical data options           | CascaderOption[]                                          |                |
| value                  | selected value (controlled)         | (string \| number)[]                                      |                |
| defaultValue           | default selected value              | (string \| number)[]                                      |                |
| onChange               | callback when selection changes     | (value, selectedOptions) => void                          |                |
| placeholder            | placeholder text                    | string                                                    | Please select  |
| disabled               | disable the cascader                | boolean                                                   | false          |
| allowClear             | show clear button                   | boolean                                                   | true           |
| size                   | input size                          | 'sm' \| 'md' \| 'lg'                                    | md             |
| expandTrigger          | sub-menu expand trigger             | 'click' \| 'hover'                                      | click          |
| displayRender          | custom selected display             | (labels, options) => ReactNode                            |                |
| changeOnSelect         | change value on each level select   | boolean                                                   | false          |

### CascaderOption

| Property | Description           | Type              | Default |
| -------- | --------------------- | ----------------- | ------- |
| value    | option value          | string \| number  |         |
| label    | option label          | ReactNode         |         |
| disabled | disable this option   | boolean           | false   |
| children | child options         | CascaderOption[]  |         |
| isLeaf   | mark as leaf node     | boolean           |         |
