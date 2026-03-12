<p align="center">
  <a href="https://tiny-design.dev">
    <img width="200" src="https://github.com/wangdicoder/tiny-design/blob/master/apps/docs/src/assets/logo/logo.svg">
  </a>
</p>

<h1 align="center">Tiny Design</h1>
<p align="center">A friendly UI component set for React</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tiny-design/react">
    <img src="https://img.shields.io/npm/v/@tiny-design/react.svg?style=flat-square" alt="npm version"/>
  </a>
  <a href="https://www.npmjs.com/package/@tiny-design/react">
    <img src="https://img.shields.io/npm/dm/@tiny-design/react.svg?style=flat-square" alt="npm downloads"/>
  </a>
  <a href="https://bundlephobia.com/package/@tiny-design/react">
    <img src="https://img.shields.io/bundlephobia/minzip/@tiny-design/react.svg?style=flat-square" alt="bundle size"/>
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/static/v1?label=react&message=%3E=18&color=61dafb&style=flat-square" alt="react version"/>
  </a>
  <a href="https://github.com/wangdicoder/tiny-design/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiny-design/react.svg?style=flat-square" alt="license"/>
  </a>
</p>

---

## Features

- 80+ high-quality React components
- Written in **TypeScript** with complete type definitions
- Entirely built with function components and **React Hooks**
- **Dark mode** support with system preference detection
- **i18n** built-in — English and Chinese out of the box
- Follows [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) accessibility standards
- Customisable themes via design tokens and SCSS variables
- Supports tree-shaking for minimal bundle size

## Packages

| Package | Description |
| ------- | ----------- |
| [@tiny-design/react](./packages/react) | Core component library |
| [@tiny-design/tokens](./packages/tokens) | Design tokens and foundational styles |

## Component Categories

| Category | Components | Examples |
| -------- | :--------: | -------- |
| Foundation | 5 | Button, Icon, Image, Link, Typography |
| Layout | 7 | Grid, Flex, Space, Split, Divider, Aspect Ratio |
| Navigation | 7 | Menu, Breadcrumb, Dropdown, Pagination, Steps, Anchor, SpeedDial |
| Data Display | 19 | Card, Carousel, Collapse, Tag, Tooltip, Tree, Table |
| Form | 22 | Input, Select, DatePicker, TimePicker, Checkbox, Radio, Slider |
| Feedback | 13 | Modal, Drawer, Overlay, Message, Notification, Alert, Skeleton |
| Miscellany | 5 | ConfigProvider, BackTop, Sticky, Keyboard, CopyToClipboard |

## Install

```bash
# npm
npm install @tiny-design/react

# yarn
yarn add @tiny-design/react

# pnpm
pnpm add @tiny-design/react
```

## Quick Start

```jsx
import { Button, Switch } from '@tiny-design/react';

const App = () => (
  <>
    <Button btnType="primary">Click Me</Button>
    <Switch checked />
  </>
);
```

Styles are automatically imported alongside each component — no separate CSS import needed. Modern bundlers (webpack, Vite, Rollup) will tree-shake unused components and their styles.

## Theming

### Dark mode

```jsx
import { ConfigProvider } from '@tiny-design/react';

<ConfigProvider theme="dark">
  <App />
</ConfigProvider>
```

### Custom themes

Override SCSS variables to customise colours, borders, fonts, and more:

```scss
@use '@tiny-design/tokens/scss/variables' with (
  $primary-color: #007bff
);
@use '@tiny-design/tokens/scss/base';
```

See the [Theme Customisation Guide](https://tiny-design.dev/guide/customise-theme) for details.

## Internationalization

Built-in locale support for English and Chinese. Set locale via `ConfigProvider` or `IntlProvider`:

```jsx
import { ConfigProvider, zh_CN } from '@tiny-design/react';

<ConfigProvider locale={zh_CN}>
  <App />
</ConfigProvider>
```

| Locale | Language |
| ------ | -------- |
| en_US  | English (default) |
| zh_CN  | 简体中文 |

## Browser Support

Supports all modern browsers. IE is **not** supported.

| <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="Edge" width="24px" height="24px" /><br>Edge | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" /><br>Firefox | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" /><br>Chrome | <img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" /><br>Safari |
| --- | --- | --- | --- |
| last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## Links

- [Documentation](https://tiny-design.dev)
- [Changelog](https://github.com/wangdicoder/tiny-design/blob/master/CHANGELOG.md)
- [Issues](https://github.com/wangdicoder/tiny-design/issues)

## License

[MIT](https://github.com/wangdicoder/tiny-design/blob/master/LICENSE)
