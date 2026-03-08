# 自定义主题

Tiny UI 使用 BEM 风格的 SCSS 编写样式，你可以自定义一些基础的设计变量，以满足业务和品牌上多样化的视觉需求，包括主色、圆角、边框颜色等。

## SCSS 变量

我们使用 [SASS](https://sass-lang.com/) 作为样式的开发语言。针对每个可自定义的设计要素，定义了一组 SCSS 变量。
以下是一些主要的变量，所有 SCSS 变量请参考 [默认变量](https://github.com/wangdicoder/tiny-ui/blob/master/components/style/_variables.scss)。

```css
// Color
$primary-color: #6E41BF                       !default;

// Font
$font-color: $body-color                      !default;
$font-path: 'fonts'                           !default;
$font-size-base: 1rem                         !default;
$font-size-lg: $font-size-base * 1.25         !default;
$font-size-sm: $font-size-base * .875         !default;
$font-weight: 400                             !default;

// Border
$border-radius: 2px                           !default;
$border-width: 1px                            !default;
$border-color: $gray-300                      !default;
...
```

如果现有的变量列表无法满足你的需求，请提交 issue 反馈。

**什么是 !default？**
> Tiny UI 中的每个 Sass 变量都包含 **!default** 标志，允许你在自己的 Sass 中覆盖变量的默认值，而无需修改源代码。根据需要复制并粘贴变量，修改它们的值，然后移除 **!default** 标志即可。

## 如何操作 - 在项目中更新 SCSS 变量

### 1. 安装 Sass

```bash
$ npm install sass --save-dev
```

### 2. 覆盖变量

创建一个新的样式文件，例如 `theme-variables.scss`。

**变量的顺序非常重要。引入默认变量的代码必须放在最后一行。**

```css
/** Your variable overrides */
$primary-color: #007bff;
...

/** Icon font path, required */
$font-path: '~tiny-ui/themes/fonts';

/** Default variables */
@import "~tiny-ui/themes/index.scss";
```

### 3. 引入主题文件

在项目的入口文件中引入该样式文件。

```js
import React from 'react';
import { createRoot } from 'react-dom/client';

/** insert here */
import './theme-variables.scss';
import './index.scss';
import App from './App';

createRoot(document.getElementById('root')).render(<App />);
```

注意：这种方式会加载所有组件的样式，不论你是否实际使用，因此 `babel-plugin-import` 的 style 选项将不会生效。
