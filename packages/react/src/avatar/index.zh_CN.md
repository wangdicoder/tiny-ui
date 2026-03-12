import AutoFont from './demo/auto-font.md'
import Basic from './demo/basic.md'
import Group from './demo/group.md'
import Presence from './demo/presence.md'
import Type from './demo/type.md'

# Avatar

头像用于代表用户或事物，支持 `image`、`Icon` 或 `letter` 三种类型。

## 使用场景

展示用户头像图片

## 引入方式

```jsx
import { Avatar } from 'tiny-design';

const { Group } = Avatar;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Type/>
    <Group/>
  </Column>
  <Column>
    <Presence/>
    <AutoFont/>
  </Column>
</Layout>

## API

### Avatar

| 属性      | 说明                                      | 类型                                                          | 默认值    |
| --------- | ----------------------------------------- | ------------------------------------------------------------- | --------- |
| size      | 头像大小                                  | number                                                        | 38        |
| presence  | 状态指示器                                | enum: `online` &#124; `busy` &#124; `away` &#124; `offline`   | undefined |
| shape     | 头像形状                                  | enum: `circle` &#124; `square`                                | `circle`  |
| icon      | 传入图标组件进行展示                      | ReactNode                                                     | -         |
| src	    | 图片地址                                  | string                                                        | -         |
| alt	    | 图片替代文本                              | string                                                        | -         |
| style	    | 容器样式对象                              | CSSProperties                                                 | -         |
| className	| 容器的 className                          | string                                                        | -         |

### Avatar.Group

| 属性      | 说明                                      | 类型                                                          | 默认值    |
| --------- | ----------------------------------------- | ------------------------------------------------------------- | --------- |
| gap       | 两个头像之间的距离                        | number &#124; string                                          | -15       |
