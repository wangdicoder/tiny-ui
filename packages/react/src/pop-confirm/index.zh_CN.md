import Basic from './demo/basic.md'
import Placement from './demo/placement.md'
import Locale from './demo/locale.md'
import Icon from './demo/icon.md'

# PopConfirm

轻量级的确认对话框。

## 使用场景

用于询问用户确认的简洁紧凑的对话框。

与确认模态对话框的区别在于，它比全屏弹出的静态确认模态框更加轻量。

## 引入方式

```jsx
import { PopConfirm } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Placement/>
  </Column>
  <Column>
    <Locale/>
    <Icon/>
  </Column>
</Layout>

## API

继承所有 [Popover](#/components/popover) 属性，以及：

| 属性        | 说明                     | 类型                     | 默认值    |
| ----------- | ------------------------ | ------------------------ | --------- |
| confirmText | 确认按钮文本             | string                   | `OK`      |
| cancelText  | 取消按钮文本             | string                   | `Cancel`  |
| onConfirm   | 确认回调                 | (e: MouseEvent) => void  | -         |
| onCancel    | 取消回调                 | (e: MouseEvent) => void  | -         |
| icon        | 自定义图标               | ReactNode                | -         |
