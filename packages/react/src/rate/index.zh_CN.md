import Basic from './demo/basic.md'
import Character from './demo/character.md'
import Clearable from './demo/clearable.md'
import Disabled from './demo/disabled.md'
import Half from './demo/half.md'

# Rate

评分组件。

## 使用场景

- 展示评价结果。

- 对事物进行快速评分操作。

## 引入方式

```jsx
import { Rate } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Half/>
    <Clearable/>
  </Column>
  <Column>
    <Disabled/>
    <Character/>
  </Column>
</Layout>

## API

| 属性         | 说明                           | 类型                    | 默认值  |
| ------------ | -------------------------------------- | ----------------------- | ------- |
| count        | 星星总数                       | number                  | 5       |
| defaultValue | 初始值                         | number                  | 0       |
| value        | 受控当前值                     | number                  | -       |
| half         | 是否允许半星选择               | boolean                 | false   |
| clearable    | 是否允许再次点击清除           | boolean                 | false   |
| disabled     | 是否为只读状态                 | boolean                 | false   |
| color        | 自定义星星颜色                 | string                  | -       |
| character    | 自定义评分字符                 | ReactNode               | -       |
| onChange     | 值变化时的回调                 | (value: number) => void | -       |
| style        | 容器的样式对象                 | CSSProperties           | -       |
| className    | 容器的类名                     | string                  | -       |
