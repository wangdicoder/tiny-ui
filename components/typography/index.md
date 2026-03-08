import Basic from './demo/basic.md'
import Heading from './demo/heading.md'
import Text from './demo/text.md'

# Typography

Basic text writing, including headings, body text, lists, and more.

## Scenario

Display a title or paragraph contents.

## Usage

```jsx
import { Typography } from 'tiny-ui';

const { Heading, Paragraph, Text } = Typography;
```

## Examples

<Basic/>
<Heading/>
<Text/>

## API

### Typography

| Property  | Description              | Type          | Default |
| --------- | ------------------------ | ------------- | ------- |
| children  | content                  | ReactNode     | -       |
| style     | style object of container| CSSProperties | -       |
| className | className of container   | string        | -       |

### Typography.Heading

| Property  | Description                      | Type          | Default |
| --------- | -------------------------------- | ------------- | ------- |
| level     | heading level, 1 through 6      | number        | 1       |
| children  | content                          | ReactNode     | -       |
| style     | style object of container        | CSSProperties | -       |
| className | className of container           | string        | -       |

### Typography.Paragraph

| Property  | Description              | Type          | Default |
| --------- | ------------------------ | ------------- | ------- |
| children  | content                  | ReactNode     | -       |
| style     | style object of container| CSSProperties | -       |
| className | className of container   | string        | -       |

### Typography.Text

| Property  | Description                     | Type          | Default |
| --------- | ------------------------------- | ------------- | ------- |
| code      | code style                      | boolean       | false   |
| del       | deleted (strikethrough) style   | boolean       | false   |
| underline | underline style                 | boolean       | false   |
| strong    | bold style                      | boolean       | false   |
| italic    | italic style                    | boolean       | false   |
| mark      | marked (highlighted) style      | boolean       | false   |
| sub       | subscript style                 | boolean       | false   |
| sup       | superscript style               | boolean       | false   |
| children  | content                         | ReactNode     | -       |
| style     | style object of container       | CSSProperties | -       |
| className | className of container          | string        | -       |
