import Animation from './demo/animation.md'
import Basic from './demo/basic.md'
import CustomisedFooter from './demo/customised-footer.md'
import Position from './demo/position.md'

# Modal

模态对话框。

## 使用场景

当需要用户与应用进行交互，但又不希望跳转到新页面打断用户工作流程时，可以使用 **Modal** 在当前页面上创建一个新的浮层，以获取用户反馈或展示信息。

## 引入方式

```jsx
import { Modal } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <CustomisedFooter/>
  </Column>
  <Column>
    <Position/>
    <Animation/>
  </Column>
</Layout>

## API

| 属性               | 说明                                       | 类型                                              | 默认值    |
| ------------------ | ------------------------------------------ | ------------------------------------------------- | --------- |
| visible            | 对话框是否可见                             | boolean                                           | false     |
| header             | 对话框头部内容                             | ReactNode                                         | -         |
| footer             | 对话框底部内容                             | ReactNode                                         | -         |
| width              | 对话框宽度                                 | number &#124; string                              | 520       |
| centered           | 是否垂直居中显示                           | boolean                                           | false     |
| closable           | 是否显示关闭按钮                           | boolean                                           | true      |
| unmountOnClose     | 关闭时是否卸载子组件                       | boolean                                           | true      |
| afterClose         | 关闭动画结束后的回调                       | () => void                                        | -         |
| maskType           | 遮罩层类型                                 | enum: `default` &#124; `blurred` &#124; `inverted` &#124; `none` | `default` |
| maskClosable       | 点击遮罩层是否关闭对话框                   | boolean                                           | true      |
| confirmLoading     | 确认按钮是否处于加载状态                   | boolean                                           | false     |
| onConfirm          | 确认按钮的回调                             | (e: MouseEvent) => void                           | -         |
| onCancel           | 取消按钮的回调                             | (e: MouseEvent) => void                           | -         |
| onClose            | 关闭按钮的回调                             | (e: MouseEvent) => void                           | -         |
| confirmText        | 确认按钮文本                               | string                                            | `OK`      |
| cancelText         | 取消按钮文本                               | string                                            | `Cancel`  |
| confirmButtonProps | 传递给确认按钮的属性                       | ButtonProps                                       | -         |
| cancelButtonProps  | 传递给取消按钮的属性                       | ButtonProps                                       | -         |
| animation          | 动画类型                                   | enum: `slide` &#124; `scale`                      | `slide`   |
| top                | 距离视口顶部的距离                         | number                                            | 100       |
| zIndex             | 对话框的 z-index                           | number                                            | -         |
| headerStyle        | 头部的内联样式                             | CSSProperties                                     | -         |
| bodyStyle          | 主体的内联样式                             | CSSProperties                                     | -         |
| footerStyle        | 底部的内联样式                             | CSSProperties                                     | -         |
| maskStyle          | 遮罩层的内联样式                           | CSSProperties                                     | -         |
| style              | 容器的样式对象                             | CSSProperties                                     | -         |
| className          | 容器的类名                                 | string                                            | -         |
