import Basic from './demo/basic.md'
import Icon from './demo/icon.md'
import Placement from './demo/placement.md'
import Vertical from './demo/vertical.md'
import Switch from './demo/switch.md'
import Clickable from './demo/clickable.md'

# Steps

`Steps` 通过编号步骤传达进度。它提供了一种类似向导的工作流。

## 使用场景

当某个任务比较复杂或者存在先后顺序的一系列子任务时，可以将其分解为多个步骤，使流程更加清晰。

## 引入方式

```jsx
import { Steps } from 'tiny-ui';

const { Step } = Steps;
```

## 代码示例

<Basic />
<Icon />
<Placement />
<Vertical />
<Switch />
<Clickable />

## API

### Steps

步骤条的整体组件。

| 属性          | 说明                                                               | 类型                                                              | 默认值       |
| ----------------- | ------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- |
| current           | 设置当前步骤                                                     | number                                                            | -             |
| defaultCurrent    | 默认的当前步骤                                                | number                                                            | 0             |
| direction         | 步骤条的方向                                  | enum: `horizontal` &#124; `vertical`                              | `horizontal`  |
| status            | 当前步骤的状态                                                    | enum: `wait` &#124; `process`  &#124; `finish`  &#124; `error`    | `process`     |
| labelPlacement    | 标题和描述的放置方向（水平或垂直）    | enum: `horizontal` &#124; `vertical`                              | `vertical`    |
| onChange          | 步骤变化时的回调                                             | (current: number) => void                                         | -             |

### Steps.Step

步骤条中的单个步骤。

| 属性          | 说明                                       | 类型                          | 默认值   |
| ----------------- | ------------------------------------------------- | ----------------------------- | --------- |
| title             | 步骤的标题                                | ReactNode                     | -         |
| description       | 步骤的描述                          | ReactNode                     | -         |
| icon              | 自定义步骤图标                        | ReactNode                     | -         |
| status            | 覆盖 `Steps` 的状态                         | enum: `wait` &#124; `process`  &#124; `finish`  &#124; `error`    | -     |
| disabled          | 禁用点击事件                          | boolean                       | -         |
