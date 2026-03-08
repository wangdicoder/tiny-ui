import Basic from './demo/basic.md'

# ColorPicker 颜色选择器

颜色选择组件，支持色谱、色相滑块、预设色板和格式切换。

## 使用场景

用于视觉编辑工具、主题定制和设计系统中的颜色选择。

## 使用方式

```jsx
import { ColorPicker } from 'tiny-ui';
```

## 代码演示

<layout>
  <column>
    <Basic/>
  </column>
</layout>

## API

| 属性           | 说明                 | 类型                             | 默认值  |
| -------------- | -------------------- | -------------------------------- | ------- |
| value          | 颜色值（受控）       | string                           |         |
| defaultValue   | 默认颜色值           | string                           | #6e41bf |
| onChange       | 颜色变化回调         | (color: string) => void          |         |
| format         | 颜色格式             | 'hex' \| 'rgb' \| 'hsb'        | hex     |
| onFormatChange | 格式变化回调         | (format: string) => void         |         |
| presets        | 预设颜色             | string[]                         |         |
| showAlpha      | 显示透明度滑块       | boolean                          | false   |
| disabled       | 禁用                 | boolean                          | false   |
| size           | 触发器尺寸           | 'sm' \| 'md' \| 'lg'           | md      |
| trigger        | 触发方式             | 'click' \| 'hover'             | click   |
| open           | 面板显示（受控）     | boolean                          |         |
| onOpenChange   | 面板显示变化回调     | (open: boolean) => void          |         |
