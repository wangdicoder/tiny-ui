import Basic from './demo/basic.md'
import NoBorder from './demo/no-border.md'
import Simple from './demo/simple.md'
import Image from './demo/image.md'

# Card

Simple rectangular container.

## Scenario

A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.

## Usage

```jsx
import { Card } from 'tiny-ui';

const { Content } = Card;
```

## Examples

<layout>
  <column>
    <Basic/>
    <NoBorder/>
    <Simple/>
  </column>
  <column>
    <Image/>
  </column>
</layout>
