import Basic from './demo/basic.md'
import CustomFilter from './demo/custom-filter.md'
import Disabled from './demo/disabled.md'
import AllowClear from './demo/allow-clear.md'
import NotFound from './demo/not-found.md'
import Size from './demo/size.md'

# AutoComplete

Autocomplete function of input field.

## Scenario

- When there is a need for autocomplete functionality for an input field.
- Differs from Select in that AutoComplete is an enhanced Input, not a selection from predefined options.

## Usage

```jsx
import { AutoComplete } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Disabled/>
    <NotFound/>
  </Column>
  <Column>
    <CustomFilter/>
    <AllowClear/>
    <Size/>
  </Column>
</Layout>

## API

| Property                  | Description                                      | Type                                                          | Default |
| ------------------------- | ------------------------------------------------ | ------------------------------------------------------------- | ------- |
| options                   | Data source for autocomplete                     | \{ value, label?, disabled? \}[]                                | []      |
| value                     | Controlled input value                           | string                                                        | -       |
| defaultValue              | Initial input value                              | string                                                        | ''      |
| placeholder               | Placeholder of input                             | string                                                        | -       |
| disabled                  | Whether disabled                                 | boolean                                                       | false   |
| allowClear                | Show clear button                                | boolean                                                       | false   |
| defaultActiveFirstOption  | Whether to highlight the first option            | boolean                                                       | true    |
| open                      | Controlled open state of dropdown                | boolean                                                       | -       |
| defaultOpen               | Initial open state of dropdown                   | boolean                                                       | false   |
| notFoundContent           | Content shown when no options match              | ReactNode                                                     | -       |
| size                      | Size of input                                    | 'sm' &#124; 'md' &#124; 'lg'                                 | 'md'    |
| filterOption              | Filter function or false to disable              | boolean &#124; (inputValue, option) => boolean                | true    |
| onChange                   | Callback when input value changes                | (value: string) => void                                       | -       |
| onSelect                  | Callback when an option is selected              | (value: string, option) => void                               | -       |
| onSearch                  | Callback when searching                          | (value: string) => void                                       | -       |
| onFocus                   | Callback when input is focused                   | (e: FocusEvent) => void                                       | -       |
| onBlur                    | Callback when input loses focus                  | (e: FocusEvent) => void                                       | -       |
