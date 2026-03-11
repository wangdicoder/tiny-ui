import Basic from './demo/basic.md'
import Closable from './demo/closable.md'
import CloseButton from './demo/close-btn.md'
import Icon from './demo/icon.md'
import Title from './demo/title.md'
import Type from './demo/type.md'

# Alert

Alert component for feedback.

## Scenario

- When you need to show alert messages to users.
- When you need a persistent static container which is closable by user actions.

## Usage

```jsx
import { Alert } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Closable/>
    <Icon/>
  </Column>
  <Column>
    <Type/>
    <Title/>
    <CloseButton/>
  </Column>
</Layout>

## API

| Property   | Description                                    | Type                                                                     | Default |
| ---------- | ---------------------------------------------- | ------------------------------------------------------------------------ | ------- |
| title      | alert title                                    | string &#124; ReactNode                                                  | -       |
| type       | alert type                                     | enum: `success` &#124; `info` &#124; `warning` &#124; `error`           | `info`  |
| icon       | display icon or customise an icon              | boolean &#124; ReactNode                                                 | -       |
| iconSize   | icon size                                      | number                                                                   | -       |
| closable   | whether the alert can be closed                | boolean                                                                  | false   |
| closeText  | close text to show                             | ReactNode                                                                | -       |
| afterClose | callback when close animation is finished      | () => void                                                               | -       |
| onClose    | close button callback                          | (e: MouseEvent) => void                                                  | -       |
| style      | style object of container                      | CSSProperties                                                            | -       |
| className  | className of container                         | string                                                                   | -       |
