import Basic from './demo/basic.md'

# TimePicker

To select or input a time.

## Usage

```jsx
import { TimePicker } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
</layout>

## API

| Property     | Description                    | Type                     | Default       |
| ------------ | ------------------------------ | ------------------------ | ------------- |
| defaultValue | Default time                   | Date                     | `new Date()`  |
| value        | Currently selected time        | Date                     | -             |
| onChange     | Callback when time changes     | (date: Date) => void     | -             |
| placeholder  | Input placeholder              | string                   | `Select time` |
| disabled     | Whether the picker is disabled | boolean                  | false         |
| style        | Style object of container      | CSSProperties            | -             |
| className    | ClassName of container         | string                   | -             |
