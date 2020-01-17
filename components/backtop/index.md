import Basic from './demo/basic.md'

# BackTop

Go back to the top of the page.

## When To Use

- When the page content is very long.
- When you need to go back to the top very frequently in order to view the contents.

## Usage

```jsx
import { BackTop } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
  <column>
  </column>
</layout>

## API

| Property          | Description                                                                   | Type              | Default       |
| ----------------- | ----------------------------------------------------------------------------- | ----------------- | ------------- |
| target            | Specifies the scrollable area dom node                                        | () => HTMLElement | () => window  |
| visibilityHeight  | The `BackTop` button will not show until the scroll height reaches this value | number            | 300           |
| onClick           | A callback function, which can be executed when you click the button          | () => void        | -             |
| style	            | Style object of container	object                                              | CSSProperties     | -             |
| className	        | ClassName of container                                                        | string            | -             |
