import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Group from './demo/group.md'
import Size from './demo/size.md'

# Native Select

从选项中选择值的选择器组件。

## 使用场景
- 基于原生 `<select>` 元素封装的轻量级选择组件。
- 用于展示选项的下拉菜单。
- 分组选项——原生 `<optgroup>` 的优雅替代方案。

## 引入方式

```js
import { NativeSelect } from 'tiny-design';

const { Group, Option } = NativeSelect;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Size/>
  </Column>
  <Column>
    <Group/>
    <Disabled/>
  </Column>
</Layout>

## API

| 属性      | 说明                     | 类型                          | 默认值  |
| --------- | -------------------------------- | ----------------------------- | ------- |
| size      | 选择器尺寸               | enum: `sm` `md` `lg`          | `md`    |
| disabled  | 是否禁用选择             | boolean                       | false   |
| style	    | 容器的样式对象           |                               | -       |
| className	| 容器的类名               | string                        | -       |
