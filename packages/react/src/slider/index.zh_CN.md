import Basic from './demo/basic.md'
import Dual from './demo/dual.md'
import Vertical from './demo/vertical.md'
import Dots from './demo/dots.md'
import Marker from './demo/marker.md'
import CustomisedTooltip from './demo/customised-tooltip.md'
import Disabled from './demo/disabled.md'
import TooltipVisible from './demo/tooltip-visible.md'
import Track from './demo/track.md'

# Slider

在固定范围内拖动滑块。

## 使用场景

在一个范围内输入数值时使用。

## 引入方式

```jsx
import { Slider } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Dual/>
    <Dots/>
    <Marker/>
    <Disabled/>
  </Column>
  <Column>
    <Vertical/>
    <CustomisedTooltip/>
    <TooltipVisible/>
    <Track/>
  </Column>
</Layout>

## API

| 属性              | 说明                                                                                          | 类型                                  | 默认值        |
| ----------------- | --------------------------------------------------------------------------------------------- | ------------------------------------- | ------------- |
| value             | 滑块的值                                                                                      | number &#124; [number, number]        |               |
| defaultValue      | 滑块的默认值                                                                                  | number &#124; [number, number]        |               |
| min               | 滑块可滑动到的最小值                                                                          | number                                | 0             |
| max               | 滑块可滑动到的最大值                                                                          | number                                | 100           |
| marks             | 滑块的刻度标记                                                                                | \{ number: ReactNode \} &#124; \{ number: \{ style: CSSProperty, label: ReactNode \} \}   |     |
| dots              | 是否在轨道上显示圆点                                                                          | boolean                               | false         |
| direction         | 滑块方向                                                                                      | enum: `horizontal` &#124; `verical`   | `horizontal`  |
| step              | 滑块步进的粒度                                                                                | number                                | 1             |
| disabled          | 设为 true 时滑块将不可交互                                                                    | boolean                               | false         |
| track             | 是否显示轨道                                                                                  | boolean                               | false         |
| tooltipVisible    | 设为 true 时始终显示 Tooltip，设为 false 时始终不显示，即使拖动或悬停时也不显示                | boolean                               |               |
| tooltipPlacement  | 设置 Tooltip 显示位置                                                                         | `Placement`                           | `top`         |
| tipFormatter      | Tooltip 中显示值的格式化函数                                                                  | (value) => ReactNode                  |               |
| onChange          | 用户改变滑块值时触发的回调函数                                                                | (value) => void                       |               |
| onAfterChange     | `onmouseup` 触发时的回调                                                                      | (value) => void                       |               |
| style	            | 容器的样式对象                                                                                | CSSProperties                         |               |
| className	        | 容器的类名                                                                                    | string                                |               |
