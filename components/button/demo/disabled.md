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
      <Button disabled style={style}>Default Button</Button>
      <Button disabled btnType="primary" style={style}>Primary Button</Button>
      <Button disabled btnType="green" style={style}>Success</Button>
      <Button disabled btnType="blue" style={style}>Info</Button>
      <Button disabled btnType="yellow" style={style}>Warning</Button>
      <Button disabled btnType="red" style={style}>Danger</Button>
      <Button disabled btnType="link" style={style}>Link</Button>
    </>
  )
}
```

</demo>
