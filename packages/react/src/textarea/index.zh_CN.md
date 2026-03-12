import Basic from './demo/basic.md'
import Count from './demo/count.md'

# Textarea

用于多行文本输入。

## 使用场景

评论等场景。

## 引入方式

```jsx
import { Textarea } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
  </Column>
  <Column>
    <Count/>
  </Column>
</Layout>

## API

| 属性         | 说明                     | 类型                                         | 默认值  |
| ------------ | -------------------------------- | -------------------------------------------- | ------- |
| defaultValue | 默认值                   | string                                       |         |
| value        | 值                       | string                                       |         |
| onChange     | 文本域 onChange 回调     | function: (value, event) => void             |         |
| rows         | 行数                     | number                                       |         |
| limit        | 字符数量限制             | number                                       | false   |
| counter      | 自定义计数节点           | function: (count: number) => React.ReactNode |         |
| disabled     | 是否禁用组件             | boolean                                      |         |
| style	       | 容器的样式对象           |                                              |         |
| className    | 容器的类名               | string                                       |         |
