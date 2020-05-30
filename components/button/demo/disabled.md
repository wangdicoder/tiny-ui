<demo>

### Disabled

Add the `disabled` property to disable the Button.

```jsx live
() => {
  const style = {
    marginBottom: 12,
  };

  return (
    <>
      <div>
        <Button style={style}>Default</Button>
        <Button disabled style={style}>Default (disabled)</Button>
      </div>
      <div>
        <Button btnType="primary" style={style}>Primary</Button>
        <Button disabled btnType="primary" style={style}>Primary (disabled)</Button>
      </div>
      <div>
        <Button btnType="outline" style={style}>Outline</Button>
        <Button disabled btnType="outline" style={style}>Outline (disabled)</Button>
      </div>
      <div>
        <Button btnType="ghost" style={style}>Ghost</Button>
        <Button disabled btnType="ghost" style={style}>Ghost (disabled)</Button>
      </div>
      <div>
        <Button btnType="success" style={style}>Success</Button>
        <Button disabled btnType="success" style={style}>Success (disabled)</Button>
      </div>
      <div>
        <Button btnType="info" style={style}>Info</Button>
        <Button disabled btnType="info" style={style}>Info (disabled)</Button>
      </div>
      <div>
        <Button btnType="warning" style={style}>Warning</Button>
        <Button disabled btnType="warning" style={style}>Warning (disabled)</Button>
      </div>
      <div>      
        <Button btnType="danger" style={style}>Danger</Button>
        <Button disabled btnType="danger" style={style}>Danger (disabled)</Button>
      </div>
      <div>
        <Button btnType="link" style={style}>Link</Button>
        <Button disabled btnType="link" style={style}>Link (disabled)</Button>
      </div>
    </>
  )
}
```

</demo>
