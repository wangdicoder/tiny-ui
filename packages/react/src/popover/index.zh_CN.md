import Basic from './demo/basic.md'
import Placement from './demo/placement.md'
import Trigger from './demo/trigger.md'
import Controlled from './demo/controlled.md'

# Popover

点击或悬停时弹出的浮层卡片。

## 使用场景

用于提供额外信息或操作的简单弹出菜单。

与 `Tooltip` 相比，`Popover` 除了展示信息外，还可以提供链接和按钮等交互元素。

## 引入方式

```jsx
import { Popover } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Placement/>
  </Column>
  <Column>
    <Trigger/>
    <Controlled/>
  </Column>
</Layout>

## API

| 属性            | 说明                                                | 类型                                                                                                                                                                            | 默认值    |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title           | 弹出层标题                                          | ReactNode                                                                                                                                                                       | -         |
| content         | 弹出层内容                                          | ReactNode                                                                                                                                                                       | -         |
| placement       | 弹出层位置                                          | enum: `top` &#124; `top-start` &#124; `top-end` &#124; `bottom` &#124; `bottom-start` &#124; `bottom-end` &#124; `left` &#124; `left-start` &#124; `left-end` &#124; `right` &#124; `right-start` &#124; `right-end` | `top`     |
| trigger         | 触发方式                                            | enum: `hover` &#124; `focus` &#124; `click` &#124; `contextmenu` &#124; `manual`                                                                                               | `hover`   |
| visible         | 受控的显示状态                                      | boolean                                                                                                                                                                         | -         |
| defaultVisible  | 初始显示状态                                        | boolean                                                                                                                                                                         | false     |
| onVisibleChange | 显示状态变化时的回调                                | (visible: boolean) => void                                                                                                                                                      | -         |
| theme           | 背景主题                                            | enum: `light` &#124; `dark`                                                                                                                                                     | `light`   |
| arrow           | 是否显示箭头                                        | boolean                                                                                                                                                                         | true      |
| offset          | 弹出层与触发元素之间的距离                          | number                                                                                                                                                                          | -         |
| mouseEnterDelay | 鼠标悬停后延迟显示的时间（秒）                      | number                                                                                                                                                                          | -         |
| mouseLeaveDelay | 鼠标离开后延迟隐藏的时间（秒）                      | number                                                                                                                                                                          | -         |
| disabled        | 是否禁用                                            | boolean                                                                                                                                                                         | false     |
| style           | 容器样式对象                                        | CSSProperties                                                                                                                                                                   | -         |
| className       | 容器的 className                                    | string                                                                                                                                                                          | -         |
