import Basic from './demo/basic.md'
import Nested from './demo/nested.md'
import Affix from './demo/affix.md'
import OffsetTop from './demo/offset-top.md'

# Anchor

Hyperlinks to scroll on one page.

## Scenario

- For long pages, an anchor sidebar allows quick navigation to sections.
- Tracks the current visible section while scrolling.

## Usage

```jsx
import { Anchor } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Affix/>
  </Column>
  <Column>
    <Nested/>
    <OffsetTop/>
  </Column>
</Layout>

## API

### Anchor

| Property     | Description                                  | Type                                                                       | Default      |
| ------------ | -------------------------------------------- | -------------------------------------------------------------------------- | ------------ |
| type         | Style of the anchor indicator                | 'dot' \| 'line'                                                            | dot          |
| affix        | Whether to use sticky positioning            | boolean                                                                    | false        |
| offsetTop    | Pixels to offset from top when calculating   | number                                                                     | 0            |
| offsetBottom | Pixels to offset from bottom                 | number                                                                     | -            |
| getContainer | Scrolling container                          | () => HTMLElement                                                          | () => window |
| onChange     | Callback when active link changes            | (currentActiveLink: string) => void                                        | -            |
| onClick      | Callback when a link is clicked              | (e: MouseEvent, link: \{ title: string; href: string \}) => void            | -            |

### Anchor.Link

| Property | Description               | Type                          | Default |
| -------- | ------------------------- | ----------------------------- | ------- |
| href     | Target anchor ID          | string                        | -       |
| title    | Content of the link       | string                        | -       |
| children | Nested Anchor.Link items  | Anchor.Link[]                 | -       |
