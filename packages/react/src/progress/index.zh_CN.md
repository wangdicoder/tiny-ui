import Active from './demo/active.md'
import CustomText from './demo/custom-text.md'
import Dynamic from './demo/dynamic.md'
import InternalText from './demo/internal-text.md'
import LinearGradient from './demo/linear-gradient.md'
import ProgressBar from './demo/progress-bar.md'
import ProgressCircle from './demo/progress-circle.md'
import Reverse from './demo/reverse.md'
import SquareLinecaps from './demo/square-linecaps.md'

# Progress

展示操作流程的当前进度。

## 使用场景

如果一项操作需要较长时间才能完成，可以使用 Progress 来显示当前进度和状态。
- 当操作会中断当前界面，或者需要在后台运行超过 2 秒时。
- 当需要展示操作的完成百分比时。

## 引入方式

```jsx
import { Progress } from 'tiny-ui';

const { Bar, Circle } = Progress;
```

## 代码示例

<Layout>
  <Column>
    <ProgressBar/>
    <ProgressCircle/>
    <InternalText/>
    <Active/>
    <LinearGradient/>
  </Column>
  <Column>
    <Dynamic/>
    <CustomText/>
    <Reverse/>
    <SquareLinecaps/>
  </Column>
</Layout>

## API

| 属性      | 说明                             | 类型                               | 默认值  |
| --------- | -------------------------------- | ---------------------------------- | ------- |
| size      | 选择尺寸                         | enum: `sm` &#124; `md` &#124; `lg` | `md`    |
| disabled  | 是否禁用选择                     | boolean                            | false   |
| style	    | 容器样式对象                     | CSSProperties                      | -       |
| className	| 容器的 className                 | string                             | -       |
