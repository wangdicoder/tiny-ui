import Basic from './demo/basic.md'

# Layout

Page layout.

## Component Overview

- `Layout`: The layout wrapper, in which `Header` `Sidebar` `Content` `Footer` or `Layout` itself can be nested, and can be placed in any parent container.
- `Header`: The top layout with the default style, in which any element can be nested, and must be placed in `Layout`.
- `Sidebar`: The sidebar with default style and basic functions, in which any element can be nested, and must be placed in `Layout`.
- `Content`: The content layout with the default style, in which any element can be nested, and must be placed in `Layout`.
- `Footer`: The bottom layout with the default style, in which any element can be nested, and must be placed in `Layout`.

## Usage

```jsx
import { Layout } from 'tiny-ui';

const { Header, Footer, Content, Sidebar } = Layout;
```

## Examples

<Basic />


## API

### Layout

> `Layout.Header` `Layout.Footer` `Layout.Content` are shared same API with `Layout`.

| Property  | Description               | Type              | Default      |
| --------- | ------------------------- | ----------------- | ------------ |
| className | container className.      | string            | -            |
| style     | customise styles.         | CSSProperties     | -            |
