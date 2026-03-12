import Basic from './demo/basic.md'
import Placement from './demo/placement.md'
import Level from './demo/multi-level.md'

# Drawer

从屏幕边缘滑出的浮层面板。

## 使用场景

抽屉是一种通常覆盖在页面之上并从侧面滑入的面板。它包含一组信息或操作。由于用户无需离开当前页面即可与抽屉进行交互，因此可以在同一上下文中更高效地完成任务。

- 使用表单来创建或编辑一组信息。
- 处理子任务。当子任务对于气泡卡片来说过于复杂，同时又希望在主任务上下文中保留子任务时，抽屉非常方便。
- 当同一表单需要在多个地方使用时。

## 引入方式

```jsx
import { Drawer } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Level/>
  </Column>
  <Column>
    <Placement/>
  </Column>
</Layout>

## API

| 属性              | 说明                                          | 类型                                                      | 默认值    |
| ----------------- | --------------------------------------------- | --------------------------------------------------------- | --------- |
| placement         | 抽屉的弹出位置                                | enum: `top` &#124; `bottom` &#124; `left` &#124; `right`  | `right`   |
| size              | 抽屉的宽度或高度                              | number &#124; string                                      | 256       |
| visible           | 抽屉是否可见                                  | boolean                                                   | -         |
| header            | 抽屉头部内容                                  | ReactNode                                                 | -         |
| footer            | 抽屉底部内容                                  | ReactNode                                                 | -         |
| closable          | 是否显示关闭按钮                              | boolean                                                   | `true`    |
| unmountOnClose    | 关闭时是否卸载子组件                          | boolean                                                   | `true`    |
| style	            | 容器的样式对象                                | CSSProperties                                             | -         |
| className	        | 容器的类名                                    | string                                                    | -         |
