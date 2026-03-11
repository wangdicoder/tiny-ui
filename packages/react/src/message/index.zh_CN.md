import Basic from './demo/basic.md'
import Duration from './demo/duration.md'
import Extra from './demo/extra.md'
import Type from './demo/type.md'

# Message

全局展示操作反馈信息。

## 使用场景

- 用于提供成功、警告、错误等反馈信息。

- 消息显示在页面顶部居中位置，会自动消失，是一种不打断用户操作的轻量级提示方式。

## 引入方式

```jsx
import { Message } from 'tiny-ui';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
    <Duration/>
  </Column>
  <Column>
    <Type/>
    <Extra/>
  </Column>
</Layout>

## API

Message 通过静态方法调用：

| 方法                  | 说明                   |
| --------------------- | ---------------------- |
| Message.success(config) | 显示成功消息         |
| Message.error(config)   | 显示错误消息         |
| Message.warning(config) | 显示警告消息         |
| Message.info(config)    | 显示信息消息         |
| Message.loading(config) | 显示加载消息         |

### Config

| 属性     | 说明                                    | 类型      | 默认值  |
| -------- | --------------------------------------- | --------- | ------- |
| content  | 消息内容                                | string    | -       |
| duration | 自动关闭的延时，单位为秒                | number    | 3       |
| icon     | 自定义图标                              | ReactNode | -       |
| extra    | 消息后的附加内容                        | ReactNode | -       |
