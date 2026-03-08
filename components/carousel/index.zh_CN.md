import Basic from './demo/basic.md'
import Arrows from './demo/arrows.md'
import Fade from './demo/fade.md'

# Carousel

一个用于循环展示元素的走马灯组件，类似幻灯片。

## 引入方式

```jsx
import { Carousel } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Fade/>
  </column>
  <column>
    <Arrows/>
  </column>
</layout>

## API

| 属性            | 说明                                 | 类型                                                     | 默认值     |
| --------------- | ------------------------------------ | -------------------------------------------------------- | ---------- |
| arrows          | 显示前进/后退箭头按钮               | boolean                                                  | false      |
| autoplay        | 自动滚动幻灯片                       | boolean                                                  | false      |
| autoplaySpeed   | 自动滚动间隔时间（毫秒）             | number                                                   | 3000       |
| dotPlacement    | 指示点的位置                         | `top` &#124; `bottom` &#124; `left` &#124; `right`       | `bottom`   |
| dots            | 显示指示点                           | boolean &#124; \{ className?: string \}                   | true       |
| draggable       | 启用拖拽滚动                         | boolean                                                  | false      |
| effect          | 过渡效果                             | `scrollx` &#124; `fade`                                  | `scrollx`  |
| easing          | CSS 过渡时间函数                     | string                                                   | `ease`     |
| infinite        | 无限循环                             | boolean                                                  | true       |
| speed           | 动画持续时间（毫秒）                 | number                                                   | 500        |
| waitForAnimate  | 等待动画完成后再切换                 | boolean                                                  | false      |
| afterChange     | 幻灯片切换后的回调                   | (current: number) => void                                | -          |
| beforeChange    | 幻灯片切换前的回调                   | (current: number, next: number) => void                  | -          |
| style           | 容器样式对象                         | CSSProperties                                            | -          |
| className       | 容器的 className                     | string                                                   | -          |

### Methods

通过 ref 访问：

```jsx
const ref = useRef();
<Carousel ref={ref}>...</Carousel>

ref.current.next();     // next slide
ref.current.prev();     // previous slide
ref.current.goTo(2);    // go to slide 2
```

| 方法                      | 说明                                               |
| ------------------------- | -------------------------------------------------- |
| goTo(index, dontAnimate?) | 跳转到指定幻灯片。传入 `true` 可跳过动画。         |
| next()                    | 跳转到下一张幻灯片。                               |
| prev()                    | 跳转到上一张幻灯片。                               |
