import Basic from './demo/basic.md'
import Label from './demo/label.md'
import Password from './demo/password.md'

# Strength Indicator

A component to measure the effectiveness of a password.

## Scenario

When use a password form.

## Usage

```jsx
import { StrengthIndicator } from 'tiny-ui';
```

## Examples

<layout>
 <column>
   <Basic />
   <Label />
 </column>
 <column>
   <Password />
 </column>
</layout>

## API

| Property  | Description                               | Type                           | Default             |
| --------- | ----------------------------------------- | ------------------------------ | ------------------- |
| blocks    | the number of indicator blocks            | number                         | 3                   |
| current   | current active value (0-based)            | number                         | -                   |
| colors    | custom colors for each block              | string[]                       | -                   |
| labels    | hint labels below blocks                  | boolean &#124; ReactNode[]     | -                   |
| style     | style object of container                 | CSSProperties                  | -                   |
| className | className of container                    | string                         | -                   |
