# Customise Theme

Tiny UI provides two layers of theming:

1. **Design tokens** — CSS custom properties that power light and dark mode. These are the runtime values every component reads.
2. **SCSS variables** — compile-time variables (sizes, font stacks, border radii, etc.) that can be overridden when you build your own stylesheet.

## Dark mode

Tiny UI ships with built-in light and dark themes. Light mode is the default. To enable dark mode, set `data-tiny-theme` on the `<html>` element:

```html
<!-- Light (default, no attribute needed) -->
<html>

<!-- Dark -->
<html data-tiny-theme="dark">

<!-- Follow system preference -->
<html data-tiny-theme="system">
```

You can also use the `useTheme` hook to switch themes at runtime:

```tsx
import { useTheme } from 'tiny-ui';

const App = () => {
  const { mode, setMode, toggle } = useTheme();
  return <button onClick={toggle}>Current: {mode}</button>;
};
```

## Design tokens (CSS custom properties)

Every colour, shadow, and visual state is exposed as a `--ty-*` CSS custom property on `:root`. You can override any token in your own stylesheet:

```css
:root {
  --ty-color-primary: #007bff;
  --ty-color-primary-hover: #3d9bff;
  --ty-color-primary-active: #0062d6;
}
```

The full list of tokens can be found in the source:
- [Light theme tokens](https://github.com/wangdicoder/tiny-ui/blob/master/components/style/themes/_light.scss)
- [Dark theme tokens](https://github.com/wangdicoder/tiny-ui/blob/master/components/style/themes/_dark.scss)

## SCSS variables

If you import Tiny UI's SCSS source instead of the pre-built CSS, you can override compile-time variables such as sizes, spacing, font stacks, and border radii. Every variable uses the `!default` flag, so your overrides take precedence.

> **What's `!default`?** A Sass variable with `!default` is only assigned if it hasn't already been defined. By declaring your value *before* importing Tiny UI's styles, your value wins.

### 1. Install Sass

```bash
$ npm install sass --save-dev
```

### 2. Create your overrides file

Create a file, e.g. `theme-variables.scss`. Your overrides **must come before** the Tiny UI import:

```scss
// Your overrides
$primary-color: #007bff;
$border-radius: 4px;
$font-size-base: 14px;

// Import Tiny UI styles (applies your overrides via !default)
@use "tiny-ui/es/style/index" as *;
```

### 3. Import in your entry file

```js
import './theme-variables.scss';
```

The full list of SCSS variables can be found in [_variables.scss](https://github.com/wangdicoder/tiny-ui/blob/master/components/style/_variables.scss).

Some commonly overridden variables:

```scss
// Color
$primary-color: #6e41bf !default;

// Font
$font-size-base: 1rem !default;
$font-size-lg: $font-size-base * 1.25 !default;
$font-size-sm: $font-size-base * 0.875 !default;
$font-weight: 400 !default;

// Border
$border-radius: 2px !default;
$border-width: 1px !default;
$border-color: $gray-300 !default;

// Component sizes
$height-sm: 24px !default;
$height-md: 32px !default;
$height-lg: 42px !default;
```

Please report an issue if the existing list of variables is not enough for you.
