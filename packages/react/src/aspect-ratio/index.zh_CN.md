import Video from './demo/video.md'
import Image from './demo/image.md'
import Map from './demo/map.md'

# Aspect Radio

用于描述元素宽度与高度之间比例关系的组件。

## 使用场景

用于嵌入响应式图片、视频和地图等。它使用了一种常见的 [padding hack](https://css-tricks.com/aspect-ratio-boxes/) 技术来实现。

## 引入方式

```jsx
import { AspectRatio } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Video/>
    <Map/>
  </Column>
  <Column>
    <Image/>
  </Column>
</Layout>

## API

| 属性  | 说明                       | 类型                  | 默认值   |
| --------- | --------------------------------- | --------------------- | --------- |
| width     | 盒子宽度                     | number &#124; string  | -         |
| ratio     | 内容的宽高比   | number                | 1         |
| style	    | 容器的样式对象  | CSSProperties         | -         |
| className	| 容器的 className            | string                | -         |
