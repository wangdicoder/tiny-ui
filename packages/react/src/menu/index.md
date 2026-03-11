import Horizontal from './demo/horizontal.md';
import Vertical from './demo/vertical.md';
import Inline from './demo/inline.md';

# Menu

A versatile navigation component with dropdown menu.

## Scenario

An accessible dropdown menu for the common dropdown menu button design pattern. Menu uses roving tabIndex for focus management.

## Usage

```jsx
import { Menu } from 'tiny-ui';

const { Item, SubMenu, ItemGroup, Divider } = Menu;
```

## Examples

<Horizontal />
<Vertical />
<Inline />


## API

### Menu

| Property        | Description                                    | Type                                                                       | Default      |
| --------------- | ---------------------------------------------- | -------------------------------------------------------------------------- | ------------ |
| defaultIndex    | initially selected menu item key               | string                                                                     | -            |
| theme           | color theme of the menu                        | enum: `light` &#124; `dark`                                                | `light`      |
| mode            | type of menu                                   | enum: `horizontal` &#124; `vertical` &#124; `inline`                       | `horizontal` |
| inlineIndent    | indent pixels of inline menu items per level   | number                                                                     | -            |
| onSelect        | called when a menu item is selected            | (selectedIndex: string) => void                                            | -            |
| style           | style object of container                      | CSSProperties                                                              | -            |
| className       | className of container                         | string                                                                     | -            |

### Menu.Item

| Property  | Description                | Type                       | Default |
| --------- | -------------------------- | -------------------------- | ------- |
| index     | unique key of menu item    | string                     | -       |
| disabled  | whether disabled           | boolean                    | false   |
| onClick   | click callback             | (e: MouseEvent) => void    | -       |

### Menu.SubMenu

| Property  | Description                      | Type      | Default |
| --------- | -------------------------------- | --------- | ------- |
| title     | title of the submenu             | ReactNode | -       |
| index     | unique key of submenu            | string    | -       |
| disabled  | whether disabled                 | boolean   | false   |
| icon      | icon of the submenu              | ReactNode | -       |

### Menu.ItemGroup

| Property | Description             | Type   | Default |
| -------- | ----------------------- | ------ | ------- |
| title    | title of the group      | string | -       |
