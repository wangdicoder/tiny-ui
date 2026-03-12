import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Loading from './demo/loading.md'
import Size from './demo/size.md'
import Text from './demo/text.md'

# Switch

Switch 用于在两种对立状态之间切换。

## 使用场景

- 当需要表示两种状态之间的切换或开关状态时。
- Switch 和 Checkbox 的区别在于，Switch 切换时会直接触发状态变更，而 Checkbox 通常用于状态标记，需要配合提交操作使用。

## 引入方式

```jsx
import { Switch } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Text/>
    <Size/>
  </Column>
  <Column>
    <Loading/>
    <Disabled/>
  </Column>
</Layout>

## API

| 属性           | 说明                            | 类型                                          | 默认值  |
| -------------- | --------------------------------------- | --------------------------------------------- | ------- |
| defaultChecked | 初始选中状态                    | boolean                                       | false   |
| checked        | 受控选中状态                    | boolean                                       | -       |
| disabled       | 是否禁用                        | boolean                                       | false   |
| loading        | 加载状态                        | boolean                                       | false   |
| size           | 开关尺寸                        | enum: `sm` &#124; `md` &#124; `lg`            | `md`    |
| checkedText    | 选中时的内容                    | ReactNode                                     | -       |
| uncheckedText  | 未选中时的内容                  | ReactNode                                     | -       |
| onChange       | 状态变化时的回调                | (checked: boolean, e: MouseEvent) => void     | -       |
| onClick        | 点击回调                        | (checked: boolean, e: MouseEvent) => void     | -       |
| style          | 容器的样式对象                  | CSSProperties                                 | -       |
| className      | 容器的类名                      | string                                        | -       |
