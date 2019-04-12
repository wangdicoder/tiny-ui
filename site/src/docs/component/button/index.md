# Button

To trigger an operation.

## Scenario

A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.

## Usage

```js
import { Button } from 'tiny-ui';

const { Group } = Button;
```

## Examples

<!--{demo}-->

## API

| Property   | Type            | Description |
| ---------- | --------------- | ----------- |
| content \* | string          | The content of alert                                                                                      |
| duration   | number `(2000)` | The duration of the display, automatically closes the reminder box after the duration (unit:milliseconds) |
| onClose    | ()=>void        | Callback when Alert is closed                                                                             |

