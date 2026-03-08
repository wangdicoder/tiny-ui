# Select

从选项中选择值的选择器组件。

## 使用场景

- 用于展示选项的下拉菜单。
- 当需要从选项列表中选择且一次只能选择一个选项时使用。

## 引入方式

```jsx
import { Select } from 'tiny-ui';

const { Option, OptGroup } = Select;
```

## API

### Select

| 属性                    | 说明                                     | 类型                                  | 默认值  |
| ----------------------- | ------------------------------------------------ | ------------------------------------- | ------- |
| value                   | 当前选中的值                             | string &#124; string[]                | -       |
| defaultValue            | 初始选中的值                             | string &#124; string[]                | -       |
| onSelect                | 选中选项时的回调                         | (value: string &#124; string[]) => void | -     |
| placeholder             | 选择框的占位文本                         | string                                | -       |
| disabled                | 是否禁用选择框                           | boolean                               | false   |
| defaultOpen             | 下拉菜单的初始展开状态                   | boolean                               | false   |
| open                    | 下拉菜单的受控展开状态                   | boolean                               | -       |
| onDropdownVisibleChange | 下拉菜单展开状态变化时的回调             | (open: boolean) => void               | -       |
| dropdownStyle           | 下拉菜单的样式                           | CSSProperties                         | -       |
| style                   | 容器的样式对象                           | CSSProperties                         | -       |
| className               | 容器的类名                               | string                                | -       |

### Option

| 属性      | 说明                   | 类型      | 默认值  |
| --------- | -------------------------- | --------- | ------- |
| value     | 选项的值               | string    | -       |
| disabled  | 是否禁用               | boolean   | false   |

### OptGroup

| 属性     | 说明            | 类型   | 默认值  |
| -------- | ------------------- | ------ | ------- |
| label    | 分组标签        | string | -       |
