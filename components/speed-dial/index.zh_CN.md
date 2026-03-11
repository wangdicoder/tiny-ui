import Basic from './demo/basic.md'
import Direction from './demo/direction.md'
import Click from './demo/click.md'
import CustomIcon from './demo/custom-icon.md'

# SpeedDial

悬浮按钮，展开后显示一组操作。

## 使用场景

当需要一个悬浮操作按钮来展示多个相关操作时使用。常用于页面底部角落的快速操作入口。

## 引入方式

```jsx
import { SpeedDial } from 'tiny-ui';
```

## 示例

<Layout>
  <Column>
    <Basic />
    <Click />
  </Column>
  <Column>
    <Direction />
    <CustomIcon />
  </Column>
</Layout>

## API

### SpeedDial

| 属性      | 说明                       | 类型                                                   | 默认值   |
| --------- | -------------------------- | ------------------------------------------------------ | -------- |
| icon      | 主按钮图标                 | ReactNode                                              | `+`      |
| openIcon  | 展开时显示的图标           | ReactNode                                              | -        |
| direction | 操作项展开方向             | enum: `up` &#124; `down` &#124; `left` &#124; `right` | `up`     |
| open      | 受控的展开状态             | boolean                                                | -        |
| trigger   | 触发方式                   | enum: `hover` &#124; `click`                           | `hover`  |
| onOpen    | 展开时的回调               | () => void                                             | -        |
| onClose   | 关闭时的回调               | () => void                                             | -        |
| disabled  | 是否禁用                   | boolean                                                | false    |

### SpeedDial.Action

| 属性             | 说明             | 类型                                                    | 默认值  |
| ---------------- | ---------------- | ------------------------------------------------------- | ------- |
| icon             | 操作按钮图标     | ReactNode                                               | -       |
| tooltip          | 提示文字         | string                                                  | -       |
| tooltipPlacement | 提示位置         | enum: `left` &#124; `right` &#124; `top` &#124; `bottom` | -       |
| disabled         | 是否禁用         | boolean                                                 | false   |
