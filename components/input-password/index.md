import Basic from './demo/basic.md'
import HideButton from './demo/hide-button.md'
import Strength from './demo/strength.md'

# Input Password

Input component with a trigger to switch the visibility of the typed password.

## Scenario

A particle usage when the user types the password.

## Usage

```jsx
import { InputPassword } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <HideButton/>
  </column>
  <column>
    <Strength />
  </column>
</layout>

## API

| Property       | Description                               | Type       | Default |
| -------------- | ----------------------------------------- | ---------- | ------- |
| suffix         | whether display visible button            | boolean    | true    |
| visibleOnClick | callback when clicking the visible button | () => void | -       |
| style	         | style object of container object          |            | -       |
| className	     | className of container                    | string     | -       |

