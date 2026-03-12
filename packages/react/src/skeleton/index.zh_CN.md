import Basic from './demo/basic.md'
import Active from './demo/active.md'
import Combination from './demo/combination.md'

# Skeleton

在内容加载过程中提供占位图形。

## 使用场景

- 当资源需要较长时间加载时。
- 当组件包含大量信息时，如列表或卡片。
- 仅在首次加载数据时使用。

## 引入方式

```jsx
import { Skeleton } from 'tiny-design';
```

## 代码示例

<Basic/>
<Active/>
<Combination/>

## API

| 属性              | 说明                                      | 类型                          | 默认值    |
| ----------------- | ----------------------------------------- | ----------------------------- | --------- |
| active            | 是否开启微光动画效果                      | boolean                       | false     |
| rounded           | 是否显示为圆形骨架屏                      | boolean                       | false     |
