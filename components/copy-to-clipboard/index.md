import Basic from './demo/basic.md';
import UseInput from './demo/use-input.md';

# Copy To Clipboard

## Scenario

A component to handle copying contents to the clipboard.               

## Usage

```jsx
import { CopyToClipboard } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
  <column>
    <UseInput/>
  </column>
</layout>

## API

| Property  | Description                           | Type              | Default   |
| --------- | ------------------------------------- | ----------------- | --------- |
| text      | copied contents                       | string            | -         |
| onClick   | callback when clicking the contents   | React.MouseEvent  | -         |
| style	    | style object of container	object      | CSSProperties     | -         |
| className	| className of container                | string            | -         |
