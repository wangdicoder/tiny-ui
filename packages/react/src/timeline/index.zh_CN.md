import Basic from './demo/basic.md'
import Centered from './demo/centered.md'
import Color from './demo/color.md'
import Customised from './demo/customised.md'

# Timeline

展示时间线。

## 使用场景

- 当一系列信息需要按时间排序（升序或降序）时。

- 当需要通过时间线进行视觉上的关联时。

## 引入方式

```jsx
import { Timeline } from 'tiny-ui';

const { Item } = Timeline;
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Customised/>
  </Column>
  <Column>
    <Color/>
    <Centered/>
  </Column>
</Layout>

## API

### Timeline

| 属性      | 说明                             | 类型                           | 默认值       |
| --------- | -------------------------------- | ------------------------------ | ------------ |
| position  | 时间线轴的位置                   | enum: `left` &#124; `center`   | `left`       |
| style	    | 容器样式对象                     |                                | -            |
| className	| 容器的 className                 | string                         | -            |

### Timeline.Item

| 属性      | 说明                             | 类型                           | 默认值       |
| --------- | -------------------------------- | ------------------------------ | ------------ |
| dot       | 自定义时间线圆点                 | `string` &#124; `ReactNode`    | -            |
| dotStyle	| 圆点样式对象                     |                                | -            |
| style	    | 容器样式对象                     |                                | -            |
| className	| 容器的 className                 | string                         | -            |
