import Basic from './demo/basic.md'
import Other from './demo/other.md'
import Cascade from './demo/cascade.md'
import Placement from './demo/placement.md'
import Arrow from './demo/arrow.md'
import Trigger from './demo/trigger.md'
import Close from './demo/close.md'

# Dropdown

下拉列表是一种图形控件元素，类似于列表框。

## 使用场景

当有多个选项可供选择时，可以将它们封装在 `Dropdown` 中。通过悬停或点击触发器，会出现一个下拉菜单，允许你选择一个选项并执行相关操作。

## 引入方式

```jsx
import { Dropdown } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic />
    <Other />
    <Cascade />
    <Arrow />
  </column>
  <column>
    <Placement />
    <Trigger />
    <Close />
  </column>
</layout>

## API

| 属性          | 说明                           | 类型                          | 默认值   |
| ----------------- | ------------------------------------- | ----------------------------- | --------- |
| disabled          | 是否禁用下拉菜单 | boolean                       | false     |
| trigger           | 触发方式                          | enum: `click` &#124; `hover`  | `hover`   |
| placement         | 弹出菜单的位置               | enum: `top-start` &#124; `top` &#124; `end` &#124; `bottom-start` &#124; `bottom` &#124; `bottom-end` | `bottom-start`    |
| overlay           | 下拉菜单                         | [Menu](../components/menu)      | -         |
| visible           | 下拉菜单是否可见  | boolean                       | -         |
| arrow             | 是否显示下拉箭头            | boolean                       | false     |
| onVisibleChange   | 可见状态变化时的回调        | (visible: boolean) => void    | -         |
