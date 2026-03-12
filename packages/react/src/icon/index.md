import SvgBasic from './demo/svg-basic.md'
import SvgSizeColor from './demo/svg-size-color.md'
import SvgSpin from './demo/svg-spin.md'
import SvgIconList from './demo/svg-icons.tsx'

# Icon

SVG icon components from `@tiny-design/icons`. Each icon is its own module, so bundlers can tree-shake unused icons.

## Usage

```bash
$ pnpm add @tiny-design/icons
```
<br />

```jsx
import { IconClose, IconPlus } from '@tiny-design/icons';
```

## Examples

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

All icon components share the same props interface (`IconProps`), which extends `SVGAttributes<SVGSVGElement>`.

| Property  | Description                   | Type              | Default         |
| --------- | ----------------------------- | ----------------- | --------------- |
| size      | icon size (width & height)    | string \| number  | `'1em'`         |
| color     | icon fill color               | string            | `'currentColor'`|
| className | CSS class name                | string            | -               |
| style     | inline styles                 | CSSProperties     | -               |
| ref       | forwarded ref                 | Ref\<SVGSVGElement\> | -            |

## List of icons

<SvgIconList />
