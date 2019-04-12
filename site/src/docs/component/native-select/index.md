# Native Select

Select component to select value from options.

## Scenario
- It is a light weight select component which wraps native `<select>` element.
- A dropdown menu for displaying choices
- Group options - an elegant alternative to the native `<optgroup>`

## Usage

```js
import { NativeSelect } from 'tiny-ui';

const { Group, Option } = NativeSelect;
```

## Examples

<!--{demo}-->

## API

| Property  | Description                      | Type                          | Default |
| --------- | -------------------------------- | ----------------------------- | ------- |
| size      | selection size                   | enum: `sm` `md` `lg`          | `md`    |
| disabled  | disable to select                | boolean                       | false   |
| style	    | style object of container	object |                               | -       |
| className	| className of container           | string                        | -       |

