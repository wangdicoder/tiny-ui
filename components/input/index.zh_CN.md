import Addon from './demo/addon.md'
import AddonButton from './demo/addon-button.md'
import Basic from './demo/basic.md'
import Clearable from './demo/clearable.md'
import PreSuffix from './demo/pre-suf-fix.md'
import Size from './demo/size.md'

# Input

基本的用户输入组件，是一个文本输入框。支持通过键盘和鼠标来提供或修改数据。

## 使用场景

在表单中需要用户输入内容时使用。

## 引入方式

```js
import { Input } from 'tiny-ui';

const { Group, Addon } = Input;
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Addon/>
    <AddonButton/>
  </column>
  <column>
    <PreSuffix/>
    <Size/>
    <Clearable/>
  </column>
</layout>

## API

### Input

| 属性         | 说明                             | 类型                                        | 默认值  |
| ------------ | ---------------------------------------- | ------------------------------------------- | ------- |
| value        | 输入框内容值                     | string                                      | -       |
| defaultValue | 输入框初始值                     | string                                      | -       |
| size         | 输入框尺寸                       | enum: `sm` &#124; `md` &#124; `lg`          | `md`    |
| clearable    | 是否允许清除输入内容             | boolean                                     | false   |
| prefix       | 前缀图标或元素                   | ReactNode                                   | -       |
| suffix       | 后缀图标或元素                   | ReactNode                                   | -       |
| disabled     | 是否禁用                         | boolean                                     | false   |
| onChange     | 值变化时的回调                   | (e: ChangeEvent) => void                    | -       |
| onEnterPress | 按下 Enter 键时的回调            | (e: KeyboardEvent) => void                  | -       |
| onClearClick | 点击清除按钮时的回调             | (e: MouseEvent) => void                     | -       |
| style        | 容器的样式对象                   | CSSProperties                               | -       |
| className    | 容器的类名                       | string                                      | -       |

### Input.Group

| 属性      | 说明                      | 类型                                | 默认值  |
| --------- | ----------------------------- | ----------------------------------- | ------- |
| size      | 组尺寸                    | enum: `sm` &#124; `md` &#124; `lg` | `md`    |
| disabled  | 是否禁用所有输入框        | boolean                             | false   |

### Input.Addon

| 属性      | 说明                       | 类型      | 默认值  |
| --------- | ------------------------------ | --------- | ------- |
| noBorder  | 移除附加组件的边框         | boolean   | false   |
