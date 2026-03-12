import AutoFont from './demo/auto-font.md'
import Basic from './demo/basic.md'
import Group from './demo/group.md'
import Presence from './demo/presence.md'
import Type from './demo/type.md'

# Avatar

Avatars can be used to represent people or objects. It supports `image`, `Icon`, or `letter`.

## Scenario

Display user's profile picture

## Usage

```jsx
import { Avatar } from 'tiny-design';

const { Group } = Avatar;
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Type/>
    <Group/>
  </Column>
  <Column>
    <Presence/>
    <AutoFont/>
  </Column>
</Layout>

## API

### Avatar

| Property  | Description                               | Type                                                          | Default   |
| --------- | ----------------------------------------- | ------------------------------------------------------------- | --------- |
| size      | avatar size                               | number                                                        | 38        |
| presence  | status indicator                          | enum: `online` &#124; `busy` &#124; `away` &#124; `offline`   | undefined |
| shape     | avatar shape                              | enum: `circle` &#124; `square`                                | `circle`  |
| icon      | pass an icon component to display         | ReactNode                                                     | -         |
| src	    | image source                              | string                                                        | -         |
| alt	    | image alt name                            | string                                                        | -         |
| style	    | style object of container	object          | CSSProperties                                                 | -         |
| className	| className of container                    | string                                                        | -         |

### Avatar.Group

| Property  | Description                               | Type                                                          | Default   |
| --------- | ----------------------------------------- | ------------------------------------------------------------- | --------- |
| gap       | the distance between two avatars          | number &#124; string                                          | -15       |
