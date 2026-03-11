import Addon from './demo/addon.md'
import AddonButton from './demo/addon-button.md'
import Basic from './demo/basic.md'
import Clearable from './demo/clearable.md'
import PreSuffix from './demo/pre-suf-fix.md'
import Size from './demo/size.md'

# Input

A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.

## Scenario

A user input in a form field is needed.

## Usage

```js
import { Input } from 'tiny-ui';

const { Group, Addon } = Input;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Addon/>
    <AddonButton/>
  </Column>
  <Column>
    <PreSuffix/>
    <Size/>
    <Clearable/>
  </Column>
</Layout>

## API

### Input

| Property     | Description                              | Type                                        | Default |
| ------------ | ---------------------------------------- | ------------------------------------------- | ------- |
| value        | input content value                      | string                                      | -       |
| defaultValue | initial input value                      | string                                      | -       |
| size         | input size                               | enum: `sm` &#124; `md` &#124; `lg`          | `md`    |
| clearable    | allow to remove input content            | boolean                                     | false   |
| prefix       | prefix icon or element                   | ReactNode                                   | -       |
| suffix       | suffix icon or element                   | ReactNode                                   | -       |
| disabled     | whether disabled                         | boolean                                     | false   |
| onChange     | callback when value changes              | (e: ChangeEvent) => void                    | -       |
| onEnterPress | callback when Enter key is pressed       | (e: KeyboardEvent) => void                  | -       |
| onClearClick | callback when clear button is clicked    | (e: MouseEvent) => void                     | -       |
| style        | style object of container                | CSSProperties                               | -       |
| className    | className of container                   | string                                      | -       |

### Input.Group

| Property  | Description                   | Type                                | Default |
| --------- | ----------------------------- | ----------------------------------- | ------- |
| size      | group size                    | enum: `sm` &#124; `md` &#124; `lg` | `md`    |
| disabled  | whether disabled all inputs   | boolean                             | false   |

### Input.Addon

| Property  | Description                    | Type      | Default |
| --------- | ------------------------------ | --------- | ------- |
| noBorder  | remove border from addon       | boolean   | false   |
