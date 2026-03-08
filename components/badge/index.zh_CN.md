import Basic from './demo/basic.md'
import Custom from './demo/custom.md'
import Dot from './demo/dot.md'
import Overflow from './demo/overflow.md'
import Standalone from './demo/standalone.md'

# Badge

UI 元素的小型数值或状态描述符。

## 使用场景

徽标通常出现在通知或用户头像附近，醒目地展示未读消息数量。

## 引入方式

```jsx
import { Badge } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Overflow/>
    <Standalone/>
  </column>
  <column>
    <Dot/>
    <Custom/>
  </column>
</layout>

## API

| 属性          | 说明                                                          | 类型              | 默认值    |
| ------------- | ------------------------------------------------------------- | ----------------- | --------- |
| count         | 徽标中显示的数字                                              | ReactNode         |           |
| color         | 背景颜色                                                      | string            | #f2453d   |
| max           | 显示的最大数值                                                | number            | 99        |
| dot           | 仅显示一个小圆点                                              | boolean           | false     |
| processing    | 显示波纹动画效果                                              | boolean           | false     |
| showZero      | 当值为零时，默认隐藏徽标                                      | boolean           | false     |
| title         | 鼠标悬停在徽标上时显示的文本                                  | string            |           |
| badgeStyle    | 内部徽标样式                                                  | CSSProperties     |           |
