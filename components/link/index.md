import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Underline from './demo/underline.md'
import External from './demo/external.md'

# Link

## Scenario

Display a hyperlink. This component is styled to resemble a hyperlink and semantically renders an `<a>`.
                
## Usage

```jsx
import { Link } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Underline/>
  </column>
  <column>
    <Disabled/>
    <External/>
  </column>
</layout>

## API

`Link` component inherit all `<a>` properties. There are extra properties.

| Property          | Description                                                               | Type          | Default |
| ----------------- | ------------------------------------------------------------------------- | ------------- | ------- |
| disabled          | disable the hyperlink action                                              | boolean       | false   |
| underline         | determine whether display a underline style when hovering on the label    | boolean       | true    |
| external          | determine whether open a new window or not after clicking                 | boolean       | true    |
| style	            | style object of container object                                          |               | -       |
| className	        | className of container                                                    | string        | -       |
