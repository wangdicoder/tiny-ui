import Basic from './demo/basic.md'
import Closable from './demo/closable.md'
import CloseButton from './demo/close-btn.md'
import Icon from './demo/icon.md'
import Title from './demo/title.md'
import Type from './demo/type.md'

# Alert

警告提示组件，用于页面中展示重要的提示信息。

## 使用场景

- 当需要向用户显示警告提示信息时。
- 当需要一个持久的静态容器，且用户可以手动关闭时。

## 引入方式

```jsx
import { Alert } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Closable/>
    <Icon/>
  </Column>
  <Column>
    <Type/>
    <Title/>
    <CloseButton/>
  </Column>
</Layout>

## API

| 属性       | 说明                                           | 类型                                                                     | 默认值  |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| title      | 警告提示标题                                   | string &#124; ReactNode                                                  | -       |
| type       | 警告提示类型                                   | enum: `success` &#124; `info` &#124; `warning` &#124; `error`           | `info`  |
| icon       | 是否显示图标或自定义图标                       | boolean &#124; ReactNode                                                 | -       |
| iconSize   | 图标大小                                       | number                                                                   | -       |
| closable   | 是否可关闭                                     | boolean                                                                  | false   |
| closeText  | 自定义关闭按钮文本                             | ReactNode                                                                | -       |
| afterClose | 关闭动画结束后的回调                           | () => void                                                               | -       |
| onClose    | 关闭按钮的回调                                 | (e: MouseEvent) => void                                                  | -       |
| style      | 容器的样式对象                                 | CSSProperties                                                            | -       |
| className  | 容器的类名                                     | string                                                                   | -       |
