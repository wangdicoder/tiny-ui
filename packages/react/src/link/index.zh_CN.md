import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Underline from './demo/underline.md'
import External from './demo/external.md'

# Link

## 使用场景

展示一个超链接。该组件样式上类似超链接，语义上渲染为 `<a>` 标签。

## 引入方式

```jsx
import { Link } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Underline/>
  </Column>
  <Column>
    <Disabled/>
    <External/>
  </Column>
</Layout>

## API

`Link` 组件继承了所有 `<a>` 标签的属性，以下是额外的属性。

| 属性          | 说明                                                               | 类型          | 默认值 |
| ----------------- | ------------------------------------------------------------------------- | ------------- | ------- |
| disabled          | 禁用超链接操作                                              | boolean       | false   |
| underline         | 鼠标悬停时是否显示下划线样式    | boolean       | true    |
| external          | 点击后是否在新窗口中打开                 | boolean       | true    |
| style	            | 容器的样式对象                                          |               | -       |
| className	        | 容器的 className                                                    | string        | -       |
