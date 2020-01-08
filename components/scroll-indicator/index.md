import Basic from './demo/basic.md'
import Target from './demo/target.md'

# Scroll Indicator

Used to feed back the results of a series of operational tasks.

## Scenario

Use when important operations need to inform the user to process the results and the feedback is more complicated.

## Examples

<Basic/>
<Target/>

## API

| Property  | Description                                           | Type              | Default       |
| --------- | ----------------------------------------------------- | ----------------- | ------------- |
| fixed     | Determine the indicator fixed on the top of window    | boolean           | true          |  
| target    | Specifies the scrollable area DOM node	            | () => HTMLElement | () => window  |
| style	    | Style object of container	object                      | CSSProperties     | -             |
| className	| ClassName of container                                | string            | -             |
