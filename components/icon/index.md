import Basic from './demo/basic.md'
import Spin from './demo/spin.md'
import IconList from './demo/icons.tsx'

# Icon

Element provides a set of common icons.

## Usage

```jsx
import { Icon } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic />
  </column>
  <column>
    <Spin />
  </column>
</layout>


## List of icons

<IconList />

## API

| Property  | Description                   | Type          | Default       |
| --------- | ----------------------------- | ------------- | ------------- |
| name      | icon name                     | string        | -             |
| size      | icon size                     | number        | -             |
| color     | icon color                    | string        | -             |
| spin      | rotate icon with animation.   | boolean       | false         |
