import Basic from './demo/basic.md'
import Checkable from './demo/checkable.md'
import Color from './demo/color.md'
import Controlled from './demo/controlled.md'
import Dynamic from './demo/dynamic.md'

# Tag

用于分类或标记的标签。

## 使用场景

- 可用于按维度或属性进行标记。

- 用于分类时。

## 引入方式

```js
import { Tag } from 'tiny-design';

const { CheckableTag } = Tag;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Dynamic/>
    <Checkable/>
  </Column>
  <Column>
    <Color/>
    <Controlled/>
  </Column>
</Layout>

## API

### Tag

| 属性           | 说明                                           | 类型                           | 默认值  |
| -------------- | ---------------------------------------------- | ------------------------------ | ------- |
| color          | 标签颜色（预设颜色或自定义十六进制值）         | string                         | -       |
| closable       | 标签是否可关闭                                 | boolean                        | false   |
| defaultVisible | 初始显示状态                                   | boolean                        | true    |
| visible        | 受控的显示状态                                 | boolean                        | -       |
| onClose        | 关闭标签时的回调                               | (e: MouseEvent) => void        | -       |
| onClick        | 点击回调                                       | (e: MouseEvent) => void        | -       |
| style          | 容器样式对象                                   | CSSProperties                  | -       |
| className      | 容器的 className                               | string                         | -       |

预设颜色：`magenta`、`red`、`volcano`、`orange`、`gold`、`lime`、`green`、`cyan`、`blue`、`geekblue`、`purple`。

### Tag.CheckableTag

| 属性           | 说明                              | 类型                                        | 默认值  |
| -------------- | --------------------------------- | ------------------------------------------- | ------- |
| defaultChecked | 初始选中状态                      | boolean                                     | false   |
| checked        | 受控的选中状态                    | boolean                                     | -       |
| onChange       | 选中状态变化时的回调              | (checked: boolean, e: MouseEvent) => void   | -       |
