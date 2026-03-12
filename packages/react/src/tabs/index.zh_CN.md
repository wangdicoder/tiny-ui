import Basic from './demo/basic.md'
import Card from './demo/card.md'
import Disabled from './demo/disabled.md'
import Position from './demo/position.md'
import Editable from './demo/editable.md'

# Tabs

选项卡使在不同视图之间切换变得简单。

## 引入方式

```jsx
import { Tabs } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Card/>
    <Editable/>
  </Column>
  <Column>
    <Disabled/>
    <Position/>
  </Column>
</Layout>

## API

### Tabs

| 属性                  | 说明                                | 类型                                                              | 默认值     |
| --------------------- | ------------------------------------------- | ----------------------------------------------------------------- | ---------- |
| activeKey             | 当前激活的选项卡键值（受控）        | string                                                            | -          |
| defaultActiveKey      | 初始激活的选项卡键值                | string                                                            | first key  |
| items                 | 选项卡配置数组                      | [TabItem](#tabitem)\[\]                                           | -          |
| type                  | 选项卡样式类型                      | `line` &#124; `card` &#124; `editable-card`                       | `line`     |
| tabPosition           | 选项卡位置                          | `top` &#124; `bottom` &#124; `left` &#124; `right`                | `top`      |
| size                  | 选项卡栏尺寸                        | `sm` &#124; `md` &#124; `lg`                                      | `md`       |
| animated              | 是否启用选项卡切换动画              | boolean                                                           | true       |
| centered              | 选项卡栏居中显示                    | boolean                                                           | false      |
| destroyInactiveTabPane| 销毁非激活选项卡面板内容            | boolean                                                           | false      |
| tabBarExtraContent    | 选项卡栏的额外内容                  | ReactNode &#124; \{ left?: ReactNode, right?: ReactNode \}        | -          |
| tabBarGutter          | 选项卡之间的间距（像素）            | number                                                            | -          |
| tabBarStyle           | 选项卡栏的内联样式                  | CSSProperties                                                     | -          |
| hideAdd               | 隐藏可编辑卡片的添加按钮           | boolean                                                           | false      |
| onChange              | 激活选项卡变化时的回调              | (activeKey: string) => void                                       | -          |
| onTabClick            | 点击选项卡时的回调                  | (key: string, event: MouseEvent) => void                          | -          |
| onEdit                | 添加/删除的回调（可编辑卡片）       | (targetKey &#124; event, action: 'add' &#124; 'remove') => void   | -          |
| style                 | 容器的样式对象                      | CSSProperties                                                     | -          |
| className             | 容器的类名                          | string                                                            | -          |

### TabItem

| 属性       | 说明                       | 类型        | 默认值  |
| ---------- | ------------------------------ | ----------- | ------- |
| key        | 唯一标识符                 | string      | -       |
| label      | 选项卡头部内容             | ReactNode   | -       |
| children   | 选项卡主体内容             | ReactNode   | -       |
| icon       | 选项卡头部图标             | ReactNode   | -       |
| disabled   | 是否禁用该选项卡           | boolean     | false   |
| closable   | 是否显示关闭按钮（可编辑） | boolean     | true    |
| forceRender| 预渲染选项卡内容           | boolean     | false   |

### Tabs.Panel（旧版）

| 属性      | 说明                     | 类型            | 默认值  |
| --------- | -------------------------------- | --------------- | ------- |
| tab       | 选项卡头部内容           | React.ReactNode | -       |
| tabKey    | 选项卡的唯一键值         | string          | -       |
| disabled  | 是否禁用该选项卡         | boolean         | false   |
| closable  | 是否可关闭该选项卡       | boolean         | false   |
