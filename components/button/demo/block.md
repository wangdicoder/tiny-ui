<demo>

### Block Button

block property will make the button fit to its parent width.

```jsx live
() => {

  const style = {
    marginBottom: 12,
  };

  return (
    <>
      <Button block style={style}>Default Button</Button>
      <Button block btnType="primary" style={style}>Primary Button</Button>
      <Button block btnType="outline" style={style}>Outline Button</Button>
      <Button block btnType="ghost" style={style}>Ghost Button</Button>
      <Button block btnType="link" style={style}>Link Button</Button>
    </>
  );
};
```

</demo>
