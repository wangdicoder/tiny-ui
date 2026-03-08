import Basic from './demo/basic.md'
import Size from './demo/size.md'
import Picker from './demo/picker.md'
import DisabledDate from './demo/disabled-date.md'
import Disabled from './demo/disabled.md'
import ExtraFooter from './demo/extra-footer.md'

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
    <Picker/>
    <DisabledDate/>
  </column>
  <column>
    <Size/>
    <Disabled/>
    <ExtraFooter/>
  </column>
</layout>

## API

| Property            | Description                          | Type                                              | Default       |
| ------------------- | ------------------------------------ | ------------------------------------------------- | ------------- |
| defaultValue        | Default date                         | Date                                              | -             |
| value               | Controlled date value                | Date                                              | -             |
| open                | Control popup visibility             | boolean                                           | -             |
| picker              | Selection granularity                | `date` &#124; `month` &#124; `year`               | `date`        |
| format              | Display format                       | string                                            | `YYYY-MM-DD`  |
| disabled            | Disable the picker                   | boolean                                           | false         |
| placeholder         | Input placeholder                    | string                                            | `Select date` |
| allowClear          | Show clear button                    | boolean                                           | true          |
| size                | Input size                           | `sm` &#124; `md` &#124; `lg`                      | `md`          |
| showToday           | Show "Today" link in footer          | boolean                                           | true          |
| inputReadOnly       | Prevent keyboard input               | boolean                                           | true          |
| disabledDate        | Disable specific dates               | (current: Date) => boolean                        | -             |
| renderExtraFooter   | Extra content in the footer          | (mode: PanelMode) => ReactNode                    | -             |
| suffixIcon          | Custom suffix icon                   | ReactNode                                         | Calendar icon |
| onChange            | Callback when date changes           | (date: Date &#124; null, dateString: string) => void | -          |
| onOpenChange        | Callback on popup open/close         | (open: boolean) => void                           | -             |
| onPanelChange       | Callback on panel mode change        | (date: Date, mode: PanelMode) => void             | -             |
| style               | Style object of container            | CSSProperties                                     | -             |
| className           | ClassName of container               | string                                            | -             |
