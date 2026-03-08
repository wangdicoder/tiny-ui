import Basic from './demo/basic.md'
import Character from './demo/character.md'
import Clearable from './demo/clearable.md'
import Disabled from './demo/disabled.md'
import Half from './demo/half.md'

# Rate

Evaluate stuff component.

## Scenario

- Show evaluation.

- A quick rating operation on something.

## Usage

```jsx
import { Rate } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Half/>
    <Clearable/>
  </column>
  <column>
    <Disabled/>
    <Character/>
  </column>
</layout>

## API

| Property     | Description                            | Type                    | Default |
| ------------ | -------------------------------------- | ----------------------- | ------- |
| count        | total number of stars                  | number                  | 5       |
| defaultValue | initial value                          | number                  | 0       |
| value        | controlled current value               | number                  | -       |
| half         | allow half star selection              | boolean                 | false   |
| clearable    | allow clearing by clicking again       | boolean                 | false   |
| disabled     | whether read-only                      | boolean                 | false   |
| color        | custom star color                      | string                  | -       |
| character    | custom rate character                  | ReactNode               | -       |
| onChange     | callback when value changes            | (value: number) => void | -       |
| style        | style object of container              | CSSProperties           | -       |
| className    | className of container                 | string                  | -       |
