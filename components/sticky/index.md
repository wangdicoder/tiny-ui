import Basic from './demo/basic.md'
import Container from './demo/container.md'
import Callback from './demo/callback.md'

# Sticky

Wrap around another component to make it stick the viewport.

## Scenario

On longer web pages, its helpful for some content to stick to the viewport. This is common for menus and actions.

## Usage

```jsx
import { Sticky } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic />
    <Container />
  </column>
  <column>
    <Callback />
  </column>
</layout>

## API

| Property          | Description                                   | Type                          | Default       |
| ----------------- | --------------------------------------------- | ----------------------------- | ------------- |
| offsetBottom      | offset from the bottom of the viewport.       | number                        | 0             |
| offsetTop         | offset from the top of the viewport.          | number                        | -             |
| container         | specifies the scrollable area DOM node.       | () => HTMLElement             | () => window  |
| onChange          | callback for when sticky state is changed.    | (stuck: boolean) => void     | -             |

**Node: ** Children of `Sticky` must not have the property `position: absolute`.
