import SvgBasic from './demo/svg-basic.md'
import SvgSizeColor from './demo/svg-size-color.md'
import SvgSpin from './demo/svg-spin.md'
import SvgIconList from './demo/svg-icons.tsx'

# Icon

来自 `@tiny-design/icons` 的 SVG 图标组件。每个图标都是独立模块，打包工具可以 tree-shake 未使用的图标。

## 引入方式

```bash
$ pnpm add @tiny-design/icons
```

```jsx
import { IconClose, IconPlus } from '@tiny-design/icons';
```

## 代码示例

<Layout>
  <Column>
    <SvgBasic />
    <SvgSpin />
  </Column>
  <Column>
    <SvgSizeColor />
  </Column>
</Layout>

## API

所有图标组件共享相同的 props 接口 (`IconProps`)，继承自 `SVGAttributes<SVGSVGElement>`。

| 属性      | 说明                     | 类型              | 默认值           |
| --------- | ------------------------ | ----------------- | ---------------- |
| size      | 图标尺寸（宽高）          | string \| number  | `'1em'`          |
| color     | 图标填充颜色              | string            | `'currentColor'` |
| className | CSS 类名                 | string            | -                |
| style     | 行内样式                  | CSSProperties     | -                |
| ref       | 转发 ref                 | Ref\<SVGSVGElement\> | -             |

## 图标列表

<SvgIconList />
