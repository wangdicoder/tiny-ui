import Basic from './demo/basic.md'
import Millisecond from './demo/millisecond.md'

# Countdown

A countdown component

## Scenario

Countdown activities, like sec-kill.

## Usage

```js
import { Countdown } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
  </column>
  <column>
    <Millisecond/>
  </column>
</layout>

## API

| Property    | Description                          | Type              | Default |
| ----------- | ------------------------------------ | ----------------- | ------- |
| value       | countdown time                       | Date              | -       |
| millisec    | allow to get millisecond value       | boolean           | false   |
| onFinish    | callback when the countdown finished | () => void        | -       |
| style	      | style object of container	object     |                   | -       |
| className	  | className of container               | string            | -       |

