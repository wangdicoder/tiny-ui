import Horizontal from './demo/horizontal.md';
import Vertical from './demo/vertical.md';
import Inline from './demo/inline.md';

# Menu

一个多功能的导航组件，支持下拉菜单。

## 使用场景

一个可访问的下拉菜单组件，适用于常见的下拉菜单按钮设计模式。Menu 使用 roving tabIndex 进行焦点管理。

## 引入方式

```jsx
import { Menu } from 'tiny-ui';

const { Item, SubMenu, ItemGroup, Divider } = Menu;
```

## 代码示例

<Horizontal />
<Vertical />
<Inline />


## API

### Menu

| 属性        | 说明                                    | 类型                                                                       | 默认值      |
| --------------- | ---------------------------------------------- | -------------------------------------------------------------------------- | ------------ |
| defaultIndex    | 初始选中的菜单项 key               | string                                                                     | -            |
| theme           | 菜单的颜色主题                        | enum: `light` &#124; `dark`                                                | `light`      |
| mode            | 菜单类型                                   | enum: `horizontal` &#124; `vertical` &#124; `inline`                       | `horizontal` |
| inlineIndent    | 内联菜单项每层的缩进像素   | number                                                                     | -            |
| onSelect        | 选中菜单项时的回调            | (selectedIndex: string) => void                                            | -            |
| style           | 容器的样式对象                      | CSSProperties                                                              | -            |
| className       | 容器的 className                         | string                                                                     | -            |

### Menu.Item

| 属性  | 说明                | 类型                       | 默认值 |
| --------- | -------------------------- | -------------------------- | ------- |
| index     | 菜单项的唯一标识    | string                     | -       |
| disabled  | 是否禁用           | boolean                    | false   |
| onClick   | 点击回调             | (e: MouseEvent) => void    | -       |

### Menu.SubMenu

| 属性  | 说明                      | 类型      | 默认值 |
| --------- | -------------------------------- | --------- | ------- |
| title     | 子菜单标题             | ReactNode | -       |
| index     | 子菜单的唯一标识            | string    | -       |
| disabled  | 是否禁用                 | boolean   | false   |
| icon      | 子菜单图标              | ReactNode | -       |

### Menu.ItemGroup

| 属性 | 说明             | 类型   | 默认值 |
| -------- | ----------------------- | ------ | ------- |
| title    | 分组标题      | string | -       |
