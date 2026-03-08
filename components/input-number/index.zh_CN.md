import Basic from './demo/basic.md'
import Size from './demo/size.md'
import Disabled from './demo/disabled.md'

# Input Number

通过鼠标或键盘输入指定范围内的数值。

## 使用场景

当需要提供一个数值时使用。

## 引入方式

```jsx
import { InputNumber } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Disabled/>
  </column>
  <column>
    <Size/>
  </column>
</layout>

## API

| 属性          | 说明                                          | 类型                                  | 默认值                    |
| ------------- | ----------------------------------------------------- | ------------------------------------- | ------------------------- |
| min           | 最小值                                        | number                                | Number.NEGATIVE_INFINITY  |
| max           | 最大值                                        | number                                | Number.POSITIVE_INFINITY  |
| step          | 每次递增或递减的步长，可以为小数或整数        | number                                | 1                         |
| defaultValue  | 初始值                                        | number                                | 0                         |
| value         | 当前值                                        | number                                | -                         |
| onChange      | 值变化时的回调                                | (value, e) => void                    | -                         |
| size          | 输入框尺寸                                    | enum: `sm` &#124; `md` &#124; `lg`    | `md`                      |
| disabled      | 是否禁用输入框                                | boolean                               | false                     |
| controls      | 是否始终显示控制器                            | boolean                               | false                     |
| style	        | 容器的样式对象                                |                                       | -                         |
| className	    | 容器的类名                                    | string                                | -                         |
