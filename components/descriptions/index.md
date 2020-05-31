import Basic from './demo/basic.md'
import Border from './demo/border.md'
import Size from './demo/size.md'
import Vertical from './demo/vertical.md'
import VerticalBorder from './demo/vertical-border.md'

# Descriptions

Display multiple read-only fields in groups.

## Scenario

Commonly displayed on the details page.

## Usage

```jsx
import { Descriptions } from 'tiny-ui';
```

## Examples

<Basic />
<Border />
<Size />
<Vertical />
<VerticalBorder />

## API

### Descriptions

| Property      | Description                                   | Type                                  | Default       |
| ------------- | --------------------------------------------- | ------------------------------------- | ------------- |
| title         | the title of the description list             | ReactNode                             | -             |
| bordered      | whether to display the border                 | boolean                               | false         |
| column        | the number of `Descriptions.Items` in a row   | number                                | 3             |
| size	        | set the size of `Descriptions`                | enum: `sm` &#124; `md` &#124; `lg`    | `md`          |
| layout	    | description layout                            | enum: `horizontal` &#124; `vertical`  | `horizontal`  |
| colon	        | whether to display the colon                  | boolean                               | -             |

### Descriptions.Item

| Property      | Description                           | Type              | Default   |
| ------------- | ------------------------------------- | ----------------- | --------- |
| label         | description of the content            | ReactNode         | -         |
| span          | the number of columns included        | number            | 1         |
