import Basic from './demo/basic.md'
import HideButton from './demo/hide-button.md'
import Strength from './demo/strength.md'

# Input Password

带有切换密码可见性触发器的输入组件。

## 使用场景

用户输入密码时的专用场景。

## 引入方式

```jsx
import { InputPassword } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <HideButton/>
  </column>
  <column>
    <Strength />
  </column>
</layout>

## API

| 属性           | 说明                              | 类型       | 默认值  |
| -------------- | ----------------------------------------- | ---------- | ------- |
| suffix         | 是否显示可见性切换按钮            | boolean    | true    |
| visibleOnClick | 点击可见性按钮时的回调            | () => void | -       |
| style	         | 容器的样式对象                    |            | -       |
| className	     | 容器的类名                        | string     | -       |
