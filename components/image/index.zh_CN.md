import Basic from './demo/basic.md'
import Size from './demo/size.md'
import Round from './demo/round.md'
import Lazy from './demo/lazy.md'
import Fallback from './demo/fallback.md'

# Image

Image 组件用于显示图片。

## 使用场景

展示一张图片。

## 引入方式

```jsx
import { Image } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Size/>
  </Column>
  <Column>
    <Round/>
    <Lazy/>
    <Fallback/>
  </Column>
</Layout>

## API

| 属性      | 说明                               | 类型                  | 默认值   |
| ------------- | ----------------------------------------- | --------------------- | --------- |
| src           | 图片资源路径              | string                | -         |
| alt           | 描述图片的替代文本     | string                | -         |
| placeholder   | 懒加载时使用的占位图                    | string                | -         |
| width         | 图片宽度                               | string &#124; number  | -         |
| height        | 图片高度                              | string &#124; number  | -         |
| round         | 圆形图片                             | boolean               | false     |
| lazy          | 是否开启图片懒加载            | boolean               | false     |
| fallback      | 加载失败时的占位图片   | string                | -         |
| objectFit     | 图片填充模式                            |                       | -         |
| style	        | 容器的样式对象          |                       | -         |
| className	    | 容器的 className                    | string                | -         |
