import Basic from './demo/basic.md'
import Duration from './demo/duration.md'
import Icon from './demo/icon.md'
import Placement from './demo/placement.md'
import Type from './demo/type.md'

# Notification

Display a notification message.

## Scenario

To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases:

- A notification with complex content.

- A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.

- A notification that is pushed by the application.

## Usage

```js
import { Notification } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Duration/>
    <Icon/>
  </column>
  <column>
    <Placement/>
    <Type/>
  </column>
</layout>

## API

Notification is called through static methods:

| Method                      | Description                    |
| --------------------------- | ------------------------------ |
| Notification.success(config) | display a success notification |
| Notification.error(config)   | display an error notification  |
| Notification.warning(config) | display a warning notification |
| Notification.info(config)    | display an info notification   |
| Notification.open(config)    | display a plain notification   |

### Config

| Property    | Description                                | Type                              | Default      |
| ----------- | ------------------------------------------ | --------------------------------- | ------------ |
| title       | notification title                         | ReactNode                         | -            |
| description | notification description content           | ReactNode                         | -            |
| footer      | custom footer content                      | ReactNode                         | -            |
| duration    | time before auto-dismiss in seconds, 0 to disable | number                      | 4.5          |
| icon        | custom icon, or false to hide              | ReactNode &#124; boolean          | -            |
| onClick     | click callback                             | (e: MouseEvent) => void           | -            |
| onClose     | close callback                             | (e: MouseEvent) => void           | -            |
| placement   | position of the notification               | enum: `top-right` &#124; `top-left` &#124; `bottom-right` &#124; `bottom-left` | `top-right` |
