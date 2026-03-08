import Basic from './demo/basic.md'
import DefaultValue from './demo/default-value.md'
import Hover from './demo/hover.md'
import Disabled from './demo/disabled.md'
import Sizes from './demo/sizes.md'

# Cascader 级联选择

多级下拉选择，用于选择层级数据。

## 使用场景

用于从层级结构中选择数据，如地区选择（国家 > 省份 > 城市）或分类树。

## 使用方式

```jsx
import { Cascader } from 'tiny-ui';
```

## 代码演示

<layout>
  <column>
    <Basic/>
    <Hover/>
    <Sizes/>
  </column>
  <column>
    <DefaultValue/>
    <Disabled/>
  </column>
</layout>

## API

| 属性                   | 说明                   | 类型                                                      | 默认值         |
| ---------------------- | ---------------------- | --------------------------------------------------------- | -------------- |
| options                | 层级数据选项           | CascaderOption[]                                          |                |
| value                  | 选中值（受控）         | (string \| number)[]                                      |                |
| defaultValue           | 默认选中值             | (string \| number)[]                                      |                |
| onChange               | 选择变化回调           | (value, selectedOptions) => void                          |                |
| placeholder            | 占位文本               | string                                                    | 请选择          |
| disabled               | 禁用                   | boolean                                                   | false          |
| allowClear             | 显示清除按钮           | boolean                                                   | true           |
| size                   | 输入框大小             | 'sm' \| 'md' \| 'lg'                                    | md             |
| expandTrigger          | 子菜单展开触发方式     | 'click' \| 'hover'                                      | click          |
| displayRender          | 自定义显示内容         | (labels, options) => ReactNode                            |                |
| changeOnSelect         | 每级选择即触发变化     | boolean                                                   | false          |

### CascaderOption

| 属性     | 说明         | 类型              | 默认值  |
| -------- | ------------ | ----------------- | ------- |
| value    | 选项值       | string \| number  |         |
| label    | 选项标签     | ReactNode         |         |
| disabled | 禁用此选项   | boolean           | false   |
| children | 子选项       | CascaderOption[]  |         |
| isLeaf   | 标记为叶节点 | boolean           |         |
