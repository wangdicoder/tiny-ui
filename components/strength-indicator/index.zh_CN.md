import Basic from './demo/basic.md'
import Label from './demo/label.md'
import Password from './demo/password.md'

# Strength Indicator

用于衡量密码强度的组件。

## 使用场景

在使用密码表单时。

## 引入方式

```jsx
import { StrengthIndicator } from 'tiny-ui';
```

## 代码示例

<layout>
 <column>
   <Basic />
   <Label />
 </column>
 <column>
   <Password />
 </column>
</layout>

## API

| 属性      | 说明                              | 类型                           | 默认值              |
| --------- | --------------------------------- | ------------------------------ | ------------------- |
| blocks    | 指示器色块数量                    | number                         | 3                   |
| current   | 当前激活值（从 0 开始）           | number                         | -                   |
| colors    | 每个色块的自定义颜色              | string[]                       | -                   |
| labels    | 色块下方的提示标签                | boolean &#124; ReactNode[]     | -                   |
| style     | 容器的样式对象                    | CSSProperties                  | -                   |
| className | 容器的类名                        | string                         | -                   |
