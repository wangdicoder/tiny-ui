import Basic from './demo/basic.md'
import Spin from './demo/spin.md'
import IconList from './demo/icons.tsx'

# Icon

提供了一套常用的图标集合。

## 引入方式

```jsx
import { Icon } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic />
  </Column>
  <Column>
    <Spin />
  </Column>
</Layout>


## 图标列表

<IconList />

## API

| 属性  | 说明                   | 类型          | 默认值       |
| --------- | ----------------------------- | ------------- | ------------- |
| name      | 图标名称                     | string        | -             |
| size      | 图标尺寸                     | number        | -             |
| color     | 图标颜色                    | string        | -             |
| spin      | 带动画的旋转图标   | boolean       | false         |
