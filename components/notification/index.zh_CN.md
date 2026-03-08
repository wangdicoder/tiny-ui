import Basic from './demo/basic.md'
import Duration from './demo/duration.md'
import Icon from './demo/icon.md'
import Placement from './demo/placement.md'
import Type from './demo/type.md'

# Notification

显示通知消息。

## 使用场景

在视口的四个角落之一显示通知消息。通常可用于以下场景：

- 包含复杂内容的通知。

- 基于用户交互提供反馈的通知，或者展示用户后续可能需要执行的步骤详情。

- 由应用推送的通知。

## 引入方式

```js
import { Notification } from 'tiny-ui';
```

## 代码示例

<layout>
  <column>
    <Basic/>
    <Duration/>
    <Icon/>
  </column>
  <column>
    <Placement/>
    <Type/>
  </column>
</layout>

## API

Notification 通过静态方法调用：

| 方法                         | 说明                   |
| --------------------------- | ---------------------- |
| Notification.success(config) | 显示成功通知          |
| Notification.error(config)   | 显示错误通知          |
| Notification.warning(config) | 显示警告通知          |
| Notification.info(config)    | 显示信息通知          |
| Notification.open(config)    | 显示普通通知          |

### Config

| 属性        | 说明                                       | 类型                              | 默认值       |
| ----------- | ------------------------------------------ | --------------------------------- | ------------ |
| title       | 通知标题                                   | ReactNode                         | -            |
| description | 通知描述内容                               | ReactNode                         | -            |
| footer      | 自定义底部内容                             | ReactNode                         | -            |
| duration    | 自动关闭的延时，单位为秒，设为 0 则不自动关闭 | number                          | 4.5          |
| icon        | 自定义图标，设为 false 则隐藏              | ReactNode &#124; boolean          | -            |
| onClick     | 点击回调                                   | (e: MouseEvent) => void           | -            |
| onClose     | 关闭回调                                   | (e: MouseEvent) => void           | -            |
| placement   | 通知弹出位置                               | enum: `top-right` &#124; `top-left` &#124; `bottom-right` &#124; `bottom-left` | `top-right` |
