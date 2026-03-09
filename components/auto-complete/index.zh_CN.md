import Basic from './demo/basic.md'
import CustomFilter from './demo/custom-filter.md'
import Disabled from './demo/disabled.md'
import AllowClear from './demo/allow-clear.md'
import NotFound from './demo/not-found.md'
import Size from './demo/size.md'

# AutoComplete

输入框自动完成功能。

## 使用场景

- 需要对输入框进行自动补全时。
- 与 Select 不同，AutoComplete 是一个增强的输入框，而不是从预定义选项中选择。

## 引入方式

```jsx
import { AutoComplete } from 'tiny-ui';
```

## 示例

<layout>
  <column>
    <Basic/>
    <Disabled/>
    <NotFound/>
  </column>
  <column>
    <CustomFilter/>
    <AllowClear/>
    <Size/>
  </column>
</layout>

## API

| 属性                      | 说明                                     | 类型                                                          | 默认值  |
| ------------------------- | ---------------------------------------- | ------------------------------------------------------------- | ------- |
| options                   | 自动完成的数据源                         | { value, label?, disabled? }[]                                | []      |
| value                     | 受控的输入值                             | string                                                        | -       |
| defaultValue              | 初始输入值                               | string                                                        | ''      |
| placeholder               | 输入框占位文本                           | string                                                        | -       |
| disabled                  | 是否禁用                                 | boolean                                                       | false   |
| allowClear                | 显示清除按钮                             | boolean                                                       | false   |
| defaultActiveFirstOption  | 是否默认高亮第一个选项                   | boolean                                                       | true    |
| open                      | 下拉菜单的受控展开状态                   | boolean                                                       | -       |
| defaultOpen               | 下拉菜单的初始展开状态                   | boolean                                                       | false   |
| notFoundContent           | 无匹配选项时显示的内容                   | ReactNode                                                     | -       |
| size                      | 输入框尺寸                               | 'sm' &#124; 'md' &#124; 'lg'                                 | 'md'    |
| filterOption              | 自定义过滤函数或 false 禁用过滤          | boolean &#124; (inputValue, option) => boolean                | true    |
| onChange                   | 输入值变化时的回调                       | (value: string) => void                                       | -       |
| onSelect                  | 选中选项时的回调                         | (value: string, option) => void                               | -       |
| onSearch                  | 搜索时的回调                             | (value: string) => void                                       | -       |
| onFocus                   | 获得焦点时的回调                         | (e: FocusEvent) => void                                       | -       |
| onBlur                    | 失去焦点时的回调                         | (e: FocusEvent) => void                                       | -       |
