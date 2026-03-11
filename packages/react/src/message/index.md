import Basic from './demo/basic.md'
import Duration from './demo/duration.md'
import Extra from './demo/extra.md'
import Type from './demo/type.md'

# Message

Display global messages as feedback in response to user operations.

## Scenario

- To provide feedback such as success, warning, error etc.

- A message is displayed at top and center and will be dismissed automatically, as a non-interrupting light-weighted prompt.

## Usage

```jsx
import { Message } from 'tiny-ui';
```

## Examples

<Layout>
  <Column>
    <Basic/>
    <Duration/>
  </Column>
  <Column>
    <Type/>
    <Extra/>
  </Column>
</Layout>

## API

Message is called through static methods:

| Method                | Description              |
| --------------------- | ------------------------ |
| Message.success(config) | display a success message |
| Message.error(config)   | display an error message  |
| Message.warning(config) | display a warning message |
| Message.info(config)    | display an info message   |
| Message.loading(config) | display a loading message |

### Config

| Property | Description                             | Type      | Default |
| -------- | --------------------------------------- | --------- | ------- |
| content  | content of the message                  | string    | -       |
| duration | time before auto-dismiss in seconds     | number    | 3       |
| icon     | customised icon                         | ReactNode | -       |
| extra    | extra content after the message         | ReactNode | -       |
