import Basic from './demo/basic.md'
import Active from './demo/active.md'
import Combination from './demo/combination.md'

# Skeleton

Provide a placeholder while the content is loading.

## Scenario

- When a resource needs long time to load.
- When the component contains lots of information, such as List or Card.
- Only works when loading data for the first time.

## Usage

```jsx
import { Skeleton } from 'tiny-ui';
```

## Examples

<Basic/>
<Active/>
<Combination/>

## API

| Property          | Description                                       | Type                          | Default   |
| ----------------- | ------------------------------------------------- | ----------------------------- | --------- |
| active            | turn on Shimmer effect.                           | boolean                       | false     |
| rounded           | display a circle skeleton                         | boolean                       | false     |
