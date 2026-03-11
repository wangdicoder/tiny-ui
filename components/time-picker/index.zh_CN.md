import Basic from './demo/basic.md'
import Controlled from './demo/controlled.md'
import Size from './demo/size.md'
import Format from './demo/format.md'
import Step from './demo/step.md'
import Disabled from './demo/disabled.md'
import DisabledTime from './demo/disabled-time.md'
import HideDisabled from './demo/hide-disabled.md'
import ExtraFooter from './demo/extra-footer.md'

# TimePicker

用于选择或输入时间。

## 引入方式

```jsx
import { TimePicker } from 'tiny-ui';
```

## 代码示例

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
  </Column>
</Layout>

## API

| 属性                | 说明                                 | 类型                                    | 默认值        |
| ------------------- | ------------------------------------ | --------------------------------------- | ------------- |
| defaultValue        | 默认时间                             | Date                                    | -             |
| value               | 受控时间值                           | Date                                    | -             |
| open                | 控制弹出层显示                       | boolean                                 | -             |
| format              | 显示格式                             | string                                  | `HH:mm:ss`   |
| use12Hours          | 使用 12 小时制                       | boolean                                 | false         |
| hourStep            | 小时间隔步长                         | number                                  | 1             |
| minuteStep          | 分钟间隔步长                         | number                                  | 1             |
| secondStep          | 秒间隔步长                           | number                                  | 1             |
| disabled            | 禁用选择器                           | boolean                                 | false         |
| placeholder         | 输入框占位文本                       | string                                  | `Select time` |
| allowClear          | 显示清除按钮                         | boolean                                 | true          |
| size                | 输入框尺寸                           | `sm` &#124; `md` &#124; `lg`            | `md`          |
| inputReadOnly       | 阻止键盘输入                         | boolean                                 | true          |
| disabledTime        | 指定不可选择的时间                   | () => DisabledTime                      | -             |
| hideDisabledOptions | 隐藏禁用的时间选项                   | boolean                                 | false         |
| renderExtraFooter   | 页脚附加内容                         | () => ReactNode                         | -             |
| suffixIcon          | 自定义后缀图标                       | ReactNode                               | Clock icon    |
| onChange            | 时间变化时的回调                     | (date: Date &#124; null) => void        | -             |
| onOpenChange        | 弹出层打开/关闭时的回调             | (open: boolean) => void                 | -             |
| style               | 容器的样式对象                       | CSSProperties                           | -             |
| className           | 容器的类名                           | string                                  | -             |

### DisabledTime

```typescript
interface DisabledTime {
  disabledHours?: () => number[];
  disabledMinutes?: (hour: number) => number[];
  disabledSeconds?: (hour: number, minute: number) => number[];
}
```
