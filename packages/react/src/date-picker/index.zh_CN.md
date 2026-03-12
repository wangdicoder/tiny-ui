import Basic from './demo/basic.md'
import Size from './demo/size.md'
import Picker from './demo/picker.md'
import DisabledDate from './demo/disabled-date.md'
import Disabled from './demo/disabled.md'
import ExtraFooter from './demo/extra-footer.md'

# DatePicker

用于选择或输入日期。

## 引入方式

```jsx
import { DatePicker } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Picker/>
    <DisabledDate/>
  </Column>
  <Column>
    <Size/>
    <Disabled/>
    <ExtraFooter/>
  </Column>
</Layout>

## API

| 属性                | 说明                                 | 类型                                              | 默认值        |
| ------------------- | ------------------------------------ | ------------------------------------------------- | ------------- |
| defaultValue        | 默认日期                             | Date                                              | -             |
| value               | 受控日期值                           | Date                                              | -             |
| open                | 控制弹出层显示                       | boolean                                           | -             |
| picker              | 选择粒度                             | `date` &#124; `month` &#124; `year`               | `date`        |
| format              | 显示格式                             | string                                            | `YYYY-MM-DD`  |
| disabled            | 禁用选择器                           | boolean                                           | false         |
| placeholder         | 输入框占位文本                       | string                                            | `Select date` |
| allowClear          | 显示清除按钮                         | boolean                                           | true          |
| size                | 输入框尺寸                           | `sm` &#124; `md` &#124; `lg`                      | `md`          |
| showToday           | 在页脚显示"今天"链接                 | boolean                                           | true          |
| inputReadOnly       | 阻止键盘输入                         | boolean                                           | true          |
| disabledDate        | 禁用特定日期                         | (current: Date) => boolean                        | -             |
| renderExtraFooter   | 页脚附加内容                         | (mode: PanelMode) => ReactNode                    | -             |
| suffixIcon          | 自定义后缀图标                       | ReactNode                                         | Calendar icon |
| onChange            | 日期变化时的回调                     | (date: Date &#124; null, dateString: string) => void | -          |
| onOpenChange        | 弹出层打开/关闭时的回调             | (open: boolean) => void                           | -             |
| onPanelChange       | 面板模式切换时的回调                 | (date: Date, mode: PanelMode) => void             | -             |
| style               | 容器的样式对象                       | CSSProperties                                     | -             |
| className           | 容器的类名                           | string                                            | -             |
