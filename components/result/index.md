import Success from './demo/success.md'
import Loading from './demo/loading.md'
import Error from './demo/error.md'
import Warning from './demo/warning.md'
import Info from './demo/info.md'
import Icon from './demo/icon.md'

# Result

Used to feed back the results of a series of operational tasks.

## Scenario

Use when important operations need to inform the user to process the results and the feedback is more complicated.

## Examples

<Success/>
<Loading/>
<Error/>
<Warning/>
<Info/>
<Icon/>

## API

| Property  | Description                                           | Type                                                                              | Default   |
| --------- | ----------------------------------------------------- | --------------------------------------------------------------------------------- | --------- |
| title     | title field                                           | ReactNode                                                                         | -         |
| subtitle  | subtitle field                                        | ReactNode                                                                         | -         |
| status    | display different icon to indicate the result status  | enum: `success` &#124; `error` &#124; `info` &#124; `warning` &#124; `loading`    | -         |
| icon      | customised icon                                       | ReactNode                                                                         | -         |
| extra     | operating area                                        | ReactNode                                                                         | -         |
| style	    | style object of container	object                      | CSSProperties                                                                     | -         |
| className	| className of container                                | string                                                                            | -         |
