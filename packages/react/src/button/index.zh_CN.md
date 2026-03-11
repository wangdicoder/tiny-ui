import Block from './demo/block.md'
import MoreTypes from './demo/more-types.md'
import Disabled from './demo/disabled.md'
import ButtonGroup from './demo/group.md'
import Icon from './demo/icon.md'
import Loading from './demo/loading.md'
import Size from './demo/size.md'
import Type from './demo/type.md'

# Button

用于触发一个操作。

## 使用场景

按钮表示一个操作（或一系列操作）。点击按钮将触发对应的业务逻辑。

## 引入方式

```jsx
import { Button } from 'tiny-ui';

const { Group } = Button;
```

## 代码示例

<Layout>
  <Column>
    <Type/>
    <MoreTypes/>
    <Size/>
    <ButtonGroup/>
    <Loading/>
  </Column>
  <Column>
    <Icon/>
    <Disabled/>
    <Block/>
  </Column>
</Layout>

## API

| 属性  | 说明                               | 类型                                  | 默认值   |
| --------- | ----------------------------------------- | ------------------------------------- | --------- |
| btnType   | 按钮类型                               | enum: `default` &#124; `primary` &#124; `outline` &#124; `ghost` &#124; `link` &#124; `info` &#124; `successs` &#124; `warning` &#124; `danger` | `default`    |
| loading   | 设置按钮的加载状态          | boolean                               | false     |
| block     | 使按钮宽度适应其父元素宽度      | boolean                               | false     |
| size      | 按钮尺寸                               | enum: `sm` &#124; `md` &#124; `lg`    | `md`      |
| disabled  | 按钮的禁用状态                  | boolean                               | false     |
| round     | 圆角按钮                            | boolean                               | false     |
| icon      | 在文本左侧渲染一个图标    | React.ReactNode                       | -         |
| style	    | 容器的样式对象          | CSSProperties                         | -         |
| className	| 容器的 className                    | string                                | -         |
