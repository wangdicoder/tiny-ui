import Basic from './demo/basic.md'
import Controlled from './demo/controlled.md'
import Size from './demo/size.md'
import Format from './demo/format.md'
import Step from './demo/step.md'
import Disabled from './demo/disabled.md'
import DisabledTime from './demo/disabled-time.md'
import HideDisabled from './demo/hide-disabled.md'
import ExtraFooter from './demo/extra-footer.md'
import Loop from './demo/loop.md'

# TimePicker

To select or input a time.

## Usage

```jsx
import { TimePicker } from 'tiny-design';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Controlled/>
    <Format/>
    <DisabledTime/>
    <ExtraFooter/>
  </Column>
  <Column>
    <Size/>
    <Step/>
    <Disabled/>
    <HideDisabled/>
    <Loop/>
  </Column>
</Layout>

## API

| Property            | Description                          | Type                                    | Default       |
| ------------------- | ------------------------------------ | --------------------------------------- | ------------- |
| defaultValue        | Default time                         | Date                                    | -             |
| value               | Controlled time value                | Date                                    | -             |
| open                | Control popup visibility             | boolean                                 | -             |
| format              | Display format                       | string                                  | `HH:mm:ss`   |
| use12Hours          | Use 12-hour format                   | boolean                                 | false         |
| hourStep            | Hour interval step                   | number                                  | 1             |
| minuteStep          | Minute interval step                 | number                                  | 1             |
| secondStep          | Second interval step                 | number                                  | 1             |
| disabled            | Disable the picker                   | boolean                                 | false         |
| placeholder         | Input placeholder                    | string                                  | `Select time` |
| allowClear          | Show clear button                    | boolean                                 | true          |
| size                | Input size                           | `sm` &#124; `md` &#124; `lg`            | `md`          |
| inputReadOnly       | Prevent keyboard input               | boolean                                 | true          |
| disabledTime        | Specify unavailable times            | () => DisabledTime                      | -             |
| hideDisabledOptions | Hide disabled time options           | boolean                                 | false         |
| showNow             | Show "Now" button in footer          | boolean                                 | true          |
| renderExtraFooter   | Extra content in the footer          | () => ReactNode                         | -             |
| suffixIcon          | Custom suffix icon                   | ReactNode                               | Clock icon    |
| loop                | Enable infinite circular scrolling   | boolean                                 | false         |
| onChange            | Callback when time changes           | (date: Date &#124; null) => void        | -             |
| onOpenChange        | Callback on popup open/close         | (open: boolean) => void                 | -             |
| style               | Style object of container            | CSSProperties                           | -             |
| className           | ClassName of container               | string                                  | -             |

### DisabledTime

```typescript
interface DisabledTime {
  disabledHours?: () => number[];
  disabledMinutes?: (hour: number) => number[];
  disabledSeconds?: (hour: number, minute: number) => number[];
}
```
