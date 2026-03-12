import Basic from './demo/basic.md'
import Placement from './demo/placement.md'
import Locale from './demo/locale.md'
import Icon from './demo/icon.md'

# PopConfirm

A simple and compact confirmation dialog of an action.

## Scenario

A simple and compact dialog used for asking for user confirmation.

The difference with the confirm modal dialog is that it's more lightweight than the static popped full-screen confirm modal.

## Usage

```jsx
import { PopConfirm } from 'tiny-design';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Placement/>
  </Column>
  <Column>
    <Locale/>
    <Icon/>
  </Column>
</Layout>

## API

Inherits all [Popover](#/components/popover) props, plus:

| Property    | Description                  | Type                     | Default   |
| ----------- | ---------------------------- | ------------------------ | --------- |
| confirmText | text of the confirm button   | string                   | `OK`      |
| cancelText  | text of the cancel button    | string                   | `Cancel`  |
| onConfirm   | confirm callback             | (e: MouseEvent) => void  | -         |
| onCancel    | cancel callback              | (e: MouseEvent) => void  | -         |
| icon        | custom icon                  | ReactNode                | -         |
