import Basic from './demo/basic.md'
import NoBorder from './demo/no-border.md'
import Simple from './demo/simple.md'
import Hoverable from './demo/hoverable.md'
import Active from './demo/active.md'
import InnerCard from './demo/inner-card.md'
import Image from './demo/image.md'

# Card

Simple rectangular container.

## Scenario

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## Usage

```jsx
import { Card } from 'tiny-design';

const { Content } = Card;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <NoBorder/>
    <Simple/>
    <Hoverable/>
    <Active/>
  </Column>
  <Column>
    <InnerCard/>
    <Image/>
  </Column>
</Layout>

## API

| Property    | Description                                  | Type                     | Default |
| ----------- | -------------------------------------------- | ------------------------ | ------- |
| title       | card title                                   | ReactNode                | -       |
| extra       | content to render in the top-right corner    | ReactNode                | -       |
| hoverable   | lift up when hovering card                   | boolean                  | false   |
| active      | display card with elevation shadow           | boolean                  | false   |
| bordered    | toggles rendering of the border              | boolean                  | true    |
| actions     | the action list at the bottom of the card    | ReactNode[]              | -       |
| header      | custom header content                        | ReactNode                | -       |
| footer      | custom footer content                        | ReactNode                | -       |
| headerStyle | inline style of header container             | CSSProperties            | -       |
| bodyStyle   | inline style of body container               | CSSProperties            | -       |
| footerStyle | inline style of footer container             | CSSProperties            | -       |
| style       | style object of container                    | CSSProperties            | -       |
| className   | className of container                       | string                   | -       |
