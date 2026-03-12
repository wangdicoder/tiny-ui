import Basic from './demo/basic.md'
import Millisecond from './demo/millisecond.md'

# Countdown

倒计时组件。

## 使用场景

倒计时活动，例如秒杀。

## 引入方式

```js
import { Countdown } from 'tiny-design';
```

## 代码示例

<Layout>
  <Column>
    <Basic/>
  </Column>
  <Column>
    <Millisecond/>
  </Column>
</Layout>

## API

| 属性        | 说明                                 | 类型              | 默认值  |
| ----------- | ------------------------------------ | ----------------- | ------- |
| value       | 倒计时目标时间                       | Date              | -       |
| millisec    | 是否获取毫秒值                       | boolean           | false   |
| onFinish    | 倒计时结束时的回调                   | () => void        | -       |
| style	      | 容器样式对象                         |                   | -       |
| className	  | 容器的 className                     | string            | -       |
