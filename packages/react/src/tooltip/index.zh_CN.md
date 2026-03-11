import Basic from './demo/basic.md'
import Arrow from './demo/arrow.md'
import Placement from './demo/placement.md'

# Tooltip

简单的文字提示气泡。

## 使用场景

- 鼠标移入时显示提示，移出时隐藏。Tooltip 不支持复杂文本或交互操作。
- 用于为按钮/文本/操作提供说明，常用于替代 HTML 的 title 属性。

## 引入方式

```jsx
import { Tooltip } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Arrow/>
  </Column>
  <Column>
    <Placement/>
  </Column>
</Layout>

## API

| 属性            | 说明                                                | 类型                                                                                                                                                                            | 默认值    |
| --------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| title           | 提示内容                                            | ReactNode                                                                                                                                                                       | -         |
| placement       | 提示框位置                                          | enum: `top` &#124; `top-start` &#124; `top-end` &#124; `bottom` &#124; `bottom-start` &#124; `bottom-end` &#124; `left` &#124; `left-start` &#124; `left-end` &#124; `right` &#124; `right-start` &#124; `right-end` | `top`     |
| trigger         | 触发方式                                            | enum: `hover` &#124; `focus` &#124; `click` &#124; `contextmenu` &#124; `manual`                                                                                               | `hover`   |
| visible         | 受控的显示状态                                      | boolean                                                                                                                                                                         | -         |
| defaultVisible  | 初始显示状态                                        | boolean                                                                                                                                                                         | false     |
| onVisibleChange | 显示状态变化时的回调                                | (visible: boolean) => void                                                                                                                                                      | -         |
| theme           | 背景主题                                            | enum: `light` &#124; `dark`                                                                                                                                                     | `dark`    |
| arrow           | 是否显示箭头                                        | boolean                                                                                                                                                                         | true      |
| offset          | 提示框与触发元素之间的距离                          | number                                                                                                                                                                          | -         |
| mouseEnterDelay | 鼠标悬停后延迟显示的时间（秒）                      | number                                                                                                                                                                          | -         |
| mouseLeaveDelay | 鼠标离开后延迟隐藏的时间（秒）                      | number                                                                                                                                                                          | -         |
| disabled        | 是否禁用                                            | boolean                                                                                                                                                                         | false     |
