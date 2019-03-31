## Button

Defines a clickable component

### Basic Usage

Button provides 7 themes defined by the `type` attribute.

<!--start-code-->

```js
    render() {
        return (
            <div>
                <Button>
                    Default
                </Button>
                <Button
                    color="primary">
                    Primary
                </Button>
                <Button
                    color="green">
                    Info
                </Button>
                <Button
                    color="blue">
                    Success
                </Button>           
            </div>
        );
    }
```

<!--end-code-->

### API

| property | type | default | description |
| -------- | ---- | ------- | ----------- |
| type     | string | default | button's style, available parameters: `primary`, `rose`, `success`, `info`, `warning`, `danger` |
| onClick  | function | - | set the handler to handle click event |
| size     | string | default | button's size, available parameters: `lg`, `sm`, `xs` |
| uppercase | boolean| true | determine the label's transform |
| round | boolean | false | button's shape |
| outline | boolean | false | if true, the button's background will disappear |
| disabled | boolean | false | if true, the button cannot be clicked |
| className | string | - | the CSS class name of the root element |
