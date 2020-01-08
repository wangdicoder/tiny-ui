import Basic from './demo/basic.md'
import Target from './demo/target.md'

# Scroll Indicator

A "progress bar" to show how far a page has been scrolled.

## Scenario

Used when the length of content is too long.

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
