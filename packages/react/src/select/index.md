import Basic from './demo/basic.md'
import Search from './demo/search.md'
import Multiple from './demo/multiple.md'
import Render from './demo/render.md'
import Sizes from './demo/sizes.md'
import Groups from './demo/groups.md'
import Custom from './demo/custom.md'

# Select

Select component to select value from options.

## Scenario

- A dropdown menu for displaying choices.
- Single or multiple selection from a list of options.
- Supports searching/filtering, custom rendering, and data-driven options.

## Usage

```jsx
import { Select } from 'tiny-ui';

const { Option, OptGroup } = Select;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Search/>
    <Multiple/>
  </Column>
  <Column>
    <Sizes/>
    <Groups/>
    <Custom/>
    <Render/>
  </Column>
</Layout>

## API

### Select

| Property                | Description                                      | Type                                                          | Default     |
| ----------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ----------- |
| value                   | Current selected value                           | string &#124; string[]                                        | -           |
| defaultValue            | Initial selected value                           | string &#124; string[]                                        | -           |
| mode                    | Selection mode                                   | 'multiple' &#124; 'tags'                                      | -           |
| showSearch              | Enable search filtering                          | boolean                                                       | false       |
| filterOption            | Custom filter function or disable filtering      | boolean &#124; (inputValue, option) => boolean                | true        |
| onSearch                | Callback when search input changes               | (value: string) => void                                       | -           |
| onChange                | Callback when value changes                      | (value, option) => void                                       | -           |
| onSelect                | Callback when an option is selected              | (value: string &#124; string[]) => void                       | -           |
| allowClear              | Show clear button                                | boolean                                                       | false       |
| loading                 | Show loading spinner in dropdown                 | boolean                                                       | false       |
| size                    | Size of selector                                 | 'sm' &#124; 'md' &#124; 'lg'                                 | 'md'        |
| maxTagCount             | Max number of tags displayed in multiple mode    | number                                                        | -           |
| notFoundContent         | Content shown when no options match              | ReactNode                                                     | 'No data'   |
| options                 | Data-driven options (alternative to children)    | \{ value, label?, disabled? \}[]                                | -           |
| optionRender            | Custom option rendering                          | (option, \{ index \}) => ReactNode                              | -           |
| labelRender             | Custom selected label rendering                  | (\{ label, value \}) => ReactNode                               | -           |
| placeholder             | Placeholder text                                 | string                                                        | -           |
| disabled                | Whether disabled                                 | boolean                                                       | false       |
| defaultOpen             | Initial open state of dropdown                   | boolean                                                       | false       |
| open                    | Controlled open state of dropdown                | boolean                                                       | -           |
| onDropdownVisibleChange | Callback when dropdown open state changes        | (open: boolean) => void                                       | -           |
| dropdownStyle           | Style of dropdown menu                           | CSSProperties                                                 | -           |
| style                   | Style of container                               | CSSProperties                                                 | -           |
| className               | Class name of container                          | string                                                        | -           |

### Option

| Property  | Description                        | Type        | Default |
| --------- | ---------------------------------- | ----------- | ------- |
| value     | Value of the option                | string      | -       |
| label     | Display label (overrides children) | ReactNode   | -       |
| disabled  | Whether disabled                   | boolean     | false   |

### OptGroup

| Property | Description         | Type   | Default |
| -------- | ------------------- | ------ | ------- |
| label    | Group label         | string | -       |
