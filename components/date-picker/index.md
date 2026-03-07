import Basic from './demo/basic.md'

# DatePicker

To select or input a date.

## Usage

```jsx
import { DatePicker } from 'tiny-ui';
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
| defaultValue | Default selected date          | Date                     | -             |
| value        | Currently selected date        | Date                     | -             |
| onChange     | Callback when date changes     | (date: Date) => void     | -             |
| format       | Display format                 | string                   | `YYYY-MM-DD`  |
| placeholder  | Input placeholder              | string                   | `Select date` |
| disabled     | Whether the picker is disabled | boolean                  | false         |
| style        | Style object of container      | CSSProperties            | -             |
| className    | ClassName of container         | string                   | -             |
