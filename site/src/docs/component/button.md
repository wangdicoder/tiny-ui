## Button

Commonly used button.

### Basic usage

::: demo Button provides 7 themes defined by the `type` attribute.

```js
render() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button color="primary">Primary Button</Button>
      <Button color="text">Text Button</Button>
    </div>
  )
}
```
:::

### Disabled Button

The `disableds` attribute determines if the button is disabled.

:::demo Use `disabled` attribute to determine whether a button is disabled. It accepts a `Boolean` value.

```js
render() {
  return (
    <div>
      <Button disabled>Default Button</Button>
      <Button color="primary" disabled>Primary Button</Button>
      <Button color="text" disabled>Text Button</Button>
    </div>
  )
}
```
:::

### Icon Button

Use icons to add more meaning to Button. You can use icon alone to save some space, or with text together.

:::demo Use the `icon` attribute to add icon. You can find the icon list in Element icon component. Adding icons to the right side of the text is achievable with an `<i>` tag. Custom icons can be used as well.

```js
render() {
  return (
    <div>
      <Button color="primary" icon="edit"></Button>
      <Button color="primary" icon="share"></Button>
      <Button color="primary" icon="delete"></Button>
      <Button color="primary" icon="search">Search</Button>
      <Button color="primary">Upload<i className="el-icon-upload el-icon-right"></i></Button>
    </div>
  )
}
```
:::

### Button Group

Displayed as a button group, can be used to group a series of similar operations.

:::demo Use tag `Button.Group` to group your buttons.

```js
render() {
  return (
    <div>
      <Button.Group>
          <Button color="primary">Previous Page</Button>
          <Button color="primary">Next Page<i className="el-icon-arrow-right el-icon-right"></i></Button>
      </Button.Group>
      <Button.Group>
          <Button color="primary"></Button>
          <Button color="primary"></Button>
          <Button color="primary"></Button>
      </Button.Group>
    </div>
  )
}
```
:::

### Attributes
| Attribute      | Description    | Type      | Accepted values       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | button size   | string  |   large/small/mini            |    —     |
| type     | button type   | string    |   primary/success/warning/danger/info/text |     —    |
| plain     | determine whether it's a plain button   | Boolean    | — | false   |
| loading   | determine whether it's loading   | Boolean    | — | false   |
| disabled  | disable the button    | boolean   | —   | false   |
| icon  | button icon, accepts an icon name of Element icon component | string   |  —  |  —  |
| nativeType | same as native button's `type` | string | button/submit/reset | button |
