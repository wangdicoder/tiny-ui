import Basic from './demo/basic.md'
import Icon from './demo/icon.md'
import Separator from './demo/separator.md'

# Breadcrumb

A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.

## Scenario

- When the system has more than two layers in a hierarchy.
- When you need to inform the user of where they are.
- When the user may need to navigate back to a higher level.
- When the application has multi-layer architecture.

## Usage

```js
import { Breadcrumb } from 'tiny-ui';

const { Item } = Breadcrumb;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Separator/>
  </Column>
  <Column>
    <Icon/>
  </Column>
</Layout>

## API

| Property          | Description                                               | Type              | Default       |
| ----------------- | --------------------------------------------------------- | ----------------- | ------------- |
| separator         | customised separator                                      | ReactNode         | '/'           |
