import Horizontal from './demo/horizontal.md'
import Vertical from './demo/vertical.md'
import Nest from './demo/nest.md'
import Step from './demo/step.md'

# Split

将一个面板分割为两部分，可以通过拖拽调整宽度或高度。

## 使用场景

当有多个内容需要同时展示，但其中一些需要更多空间来显示时使用。

## 引入方式

```jsx
import { Split } from 'tiny-design';
```

## 代码示例

<Vertical/>
<Horizontal/>
<Nest/>
<Step/>

## API

| 属性          | 说明                               | 类型                                  | 默认值       |
| ----------------- | ----------------------------------------- | ------------------------------------- | ------------- |
| mode              | 分割模式                                | enum: `horizontal` &#124; `vertical`  | `vertical`    |
| disabled          | 是否禁用	                            | boolean                               | false         |
| min               | 目标面板的最小宽度/高度 | number &#124; string                  | 50            |
| max               | 目标面板的最大宽度/高度 | number &#124; string                  | 50            |
| size              | 目标面板的尺寸                       | number &#124; string                  | -             |
| defaultSize       | 目标面板的默认尺寸               | number &#124; string                  | -             |
| step              | 拖拽步长                                 | number                                | -             |
| resizerProps      | 调整器属性                             | JSX.IntrinsicElements['div']          | -             |
| resizerSize       | 调整器尺寸                              | number                                | 6             |
| onChange          | 尺寸变化时的回调            | (size: number) => void                | -             |
| onDragStarted     | 调整器开始拖拽时的回调 | () => void                            | -             |
| onDragFinished    | 调整器结束拖拽时的回调   | () => void                            | -             |
