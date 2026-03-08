import Basic from './demo/basic.md'
import Blur from './demo/blur.md'
import Container from './demo/container.md'
import Indicator from './demo/indicator.md'
import Size from './demo/size.md'
import State from './demo/state.md'
import Tips from './demo/tips.md'

# Loader

用于页面或区块的加载中状态的旋转指示器。

## 使用场景

当页面的某一部分正在等待异步数据或处于渲染过程中时，合适的加载动画能有效缓解用户的焦虑感。

## 引入方式

```jsx
import { Loader } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Container/>
    <Tips/>
    <Indicator/>
  </column>
  <column>
    <Size/>
    <State/>
    <Blur/>
  </column>
</layout>

## API

| 属性              | 说明                                          | 类型                                  | 默认值    |
| ----------------- | --------------------------------------------- | ------------------------------------- | --------- |
| indicator         | 自定义旋转指示器                              | ReactNode                             | -         |
| size              | 加载器大小                                    | enum: `sm` &#124; `md` &#124; `lg`    | `md`      |
| loading           | 加载状态                                      | boolean                               | true      |
| tip               | 当 Spin 有子元素时，自定义描述内容            | string                                | -         |
| vertical          | 是否垂直排列内容                              | boolean                               | false     |
| blurred           | 是否模糊加载背景                              | boolean                               | false     |
