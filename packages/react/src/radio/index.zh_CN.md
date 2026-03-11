import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Group from './demo/group.md'

# Radio

单选组件。如果只有两个选项，建议使用 `Switch` 组件。

## 使用场景

- 用于从多个选项中选择单个状态。
- 与 Select 的区别在于 Radio 对用户可见，便于选项对比，因此不宜设置过多选项。

## 引入方式

```jsx
import { Radio } from 'tiny-ui';

const { Group } = Radio;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Disabled/>
  </Column>
  <Column>
    <Group/>
  </Column>
</Layout>

## API

### Radio

| 属性           | 说明                        | 类型                             | 默认值  |
| -------------- | ----------------------------------- | -------------------------------- | ------- |
| value          | 在 Radio.Group 中使用时的值 | string &#124; number             | -       |
| name           | input 的 name 属性          | string                           | -       |
| defaultChecked | 初始选中状态                | boolean                          | false   |
| checked        | 受控选中状态                | boolean                          | -       |
| disabled       | 是否禁用                    | boolean                          | false   |
| onChange       | 状态变化时的回调            | (e: ChangeEvent) => void         | -       |
| style          | 容器的样式对象              | CSSProperties                    | -       |
| className      | 容器的类名                  | string                           | -       |

### Radio.Group

| 属性         | 说明                      | 类型                                      | 默认值  |
| ------------ | --------------------------------- | ----------------------------------------- | ------- |
| name         | 所有单选按钮的 name 属性  | string                                    | -       |
| defaultValue | 初始选中值                | string &#124; number                      | -       |
| value        | 受控选中值                | string &#124; number                      | -       |
| onChange     | 选择项变化时的回调        | (value: string &#124; number) => void     | -       |
| disabled     | 是否禁用所有单选按钮      | boolean                                   | false   |
