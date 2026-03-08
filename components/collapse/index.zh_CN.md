import Accordion from './demo/accordion.md'
import Basic from './demo/basic.md'
import Borderless from './demo/borderless.md'
import Deletable from './demo/deletable.md'
import Nested from './demo/nested.md'

# Collapse

可以折叠/展开的内容区域。

## 使用场景

可用于对复杂区域进行分组或隐藏，保持页面简洁。

`Accordion`（手风琴）是一种特殊的 `Collapse`，同一时间只允许展开一个面板。

## 引入方式

```jsx
import { Collapse } from 'tiny-ui';

const { Panel } = Collapse;
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Accordion/>
    <Nested/>
  </column>
  <column>
    <Borderless/>
    <Deletable/>
  </column>
</layout>

## API

### Collapse

| 属性              | 说明                                                  | 类型                              | 默认值    |
| ----------------- | ----------------------------------------------------- | --------------------------------- | --------- |
| defaultActiveKey  | 初始展开的面板                                        | string &#124; string[]            | []        |
| activeKey         | 当前展开面板的 key                                    | string &#124; string[]            | -         |
| accordion         | 手风琴模式                                            | boolean                           | false     |
| deletable         | 面板可删除                                            | boolean                           | false     |
| showArrow         | 显示箭头图标                                          | boolean                           | true      |
| bordered          | 在折叠区域周围渲染边框                                | boolean                           | true      |
| onChange          | 展开面板变化时的回调函数                              | (keys: string | string[]) => void | -         |

### Collapse.Panel

| 属性              | 说明                                          | 类型                              | 默认值    |
| ----------------- | --------------------------------------------- | --------------------------------- | --------- |
| itemKey           | 面板的唯一标识 key                            | string                            | -         |
| header            | 面板标题                                      | ReactNode                         | -         |
| disabled          | 设为 true 时面板无法展开或折叠                | boolean                           | -         |
| extra             | 角落的额外元素                                | ReactNode                         | -         |
| deletable         | 面板是否可删除                                | boolean                           | -         |
| showArrow         | 显示箭头图标                                  | boolean                           | -         |
| onHeaderOnClick   | 点击头部时的回调                              | (e: React.MouseEvent) => void     | -         |
