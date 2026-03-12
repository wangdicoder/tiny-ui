import Basic from './demo/basic.md'

# Segmented 分段控制器

用于在一组选项间进行切换的分段控制器。

## 使用场景

当有 2-5 个互斥选项时，作为 Radio.Group 的可视化替代方案。

## 使用方式

```jsx
import { Segmented } from 'tiny-design';
```

## 代码演示

<Layout>
  <Column>
    <Basic/>
  </Column>
</Layout>

## API

| 属性         | 说明                   | 类型                                                  | 默认值  |
| ------------ | ---------------------- | ----------------------------------------------------- | ------- |
| options      | 选项列表               | (string \| number \| SegmentedOption)[]               |         |
| value        | 当前选中值（受控）     | string \| number                                      |         |
| defaultValue | 默认选中值             | string \| number                                      |         |
| onChange     | 值变化时的回调         | (value: string \| number) => void                     |         |
| block        | 撑满父元素宽度         | boolean                                               | false   |
| disabled     | 禁用整个控件           | boolean                                               | false   |
| size         | 控件大小               | 'sm' \| 'md' \| 'lg'                                 | md      |

### SegmentedOption

| 属性     | 说明         | 类型      | 默认值  |
| -------- | ------------ | --------- | ------- |
| label    | 显示文本     | ReactNode |         |
| value    | 选项值       | string \| number |  |
| disabled | 禁用此选项   | boolean   | false   |
| icon     | 图标         | ReactNode |         |
