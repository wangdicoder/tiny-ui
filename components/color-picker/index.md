import Alpha from './demo/alpha.md'
import Basic from './demo/basic.md'
import Disabled from './demo/disabled.md'
import Format from './demo/format.md'
import Trigger from './demo/trigger.md'

# ColorPicker

A color selection component with spectrum, hue slider, preset swatches, and format toggle.

## Scenario

Used to select colors in visual editing tools, theme customization, and design systems.

## Usage

```jsx
import { ColorPicker } from 'tiny-ui';
```

## Examples

<layout>
  <column>
    <Basic/>
    <Format/>
    <Alpha/>
  </column>
  <column>
    <Disabled/>
    <Trigger/>
  </column>
</layout>

## API

| Property       | Description                        | Type                             | Default |
| -------------- | ---------------------------------- | -------------------------------- | ------- |
| value          | color value (controlled)           | string                           |         |
| defaultValue   | default color value                | string                           | #6e41bf |
| onChange       | callback when color changes        | (color: string) => void          |         |
| format         | color format                       | 'hex' \| 'rgb' \| 'hsb'        | hex     |
| onFormatChange | callback when format changes       | (format: string) => void         |         |
| presets        | preset color swatches              | string[]                         |         |
| showAlpha      | show alpha slider                  | boolean                          | false   |
| disabled       | disable the picker                 | boolean                          | false   |
| trigger        | trigger mode                       | 'click' \| 'hover'             | click   |
| open           | controlled panel visibility        | boolean                          |         |
| onOpenChange   | callback when visibility changes   | (open: boolean) => void          |         |
