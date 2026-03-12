import Basic from './demo/basic.md'
import Customised from './demo/customised.md'
import NoDesc from './demo/no-desc.md'

# Empty

空状态占位符。

## 使用场景

- 当没有数据时，展示友好的提示信息。
- 在全新的场景中，引导用户创建内容。

## 引入方式

```jsx
import { Empty } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Customised/>
  </Column>
  <Column>
    <NoDesc/>
  </Column>
</Layout>

## API

| 属性        | 说明                 | 类型                                         | 默认值  |
| ----------- | -------------------- | -------------------------------------------- | ------- |
| image       | 自定义图片           | string &#124; ReactNode                      | -       |
| imageStyle  | 图片样式             | CSSProperties                                | -       |
| description | 自定义描述内容       | boolean &#124; string &#124; React.ReactNode | -       |
| descStyle	  | 描述文本的样式       | CSSProperties                                | -       |
