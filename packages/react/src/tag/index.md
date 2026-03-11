import Basic from './demo/basic.md'
import Checkable from './demo/checkable.md'
import Color from './demo/color.md'
import Controlled from './demo/controlled.md'
import Dynamic from './demo/dynamic.md'

# Tag

Tag for categorizing or markup.

## Scenario

- It can be used to tag by dimension or property.

- When categorizing.

## Usage

```js
import { Tag } from 'tiny-ui';

const { CheckableTag } = Tag;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Dynamic/>
    <Checkable/>
  </Column>
  <Column>
    <Color/>
    <Controlled/>
  </Column>
</Layout>

## API

### Tag

| Property       | Description                                    | Type                           | Default |
| -------------- | ---------------------------------------------- | ------------------------------ | ------- |
| color          | color of the tag (preset or custom hex)        | string                         | -       |
| closable       | whether the tag can be closed                  | boolean                        | false   |
| defaultVisible | initial visibility                             | boolean                        | true    |
| visible        | controlled visibility                          | boolean                        | -       |
| onClose        | callback when tag is closed                    | (e: MouseEvent) => void        | -       |
| onClick        | click callback                                 | (e: MouseEvent) => void        | -       |
| style          | style object of container                      | CSSProperties                  | -       |
| className      | className of container                         | string                         | -       |

Preset colors: `magenta`, `red`, `volcano`, `orange`, `gold`, `lime`, `green`, `cyan`, `blue`, `geekblue`, `purple`.

### Tag.CheckableTag

| Property       | Description                       | Type                                        | Default |
| -------------- | --------------------------------- | ------------------------------------------- | ------- |
| defaultChecked | initial checked state             | boolean                                     | false   |
| checked        | controlled checked state          | boolean                                     | -       |
| onChange       | callback when checked changes     | (checked: boolean, e: MouseEvent) => void   | -       |
