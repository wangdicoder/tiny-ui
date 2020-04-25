<demo>

### Block Button

block property will make the button fit to its parent width.

```jsx live
() => {

  const marginBottomStyle = {
    marginBottom: 12,
  };

  return (
    <>
      <Button block style={marginBottomStyle}>Default Button</Button>
      <Button block btnType="primary" style={marginBottomStyle}>Primary Button</Button>
      <Button block btnType="outline" style={marginBottomStyle}>Outline Button</Button>
      <Button block btnType="ghost" style={marginBottomStyle}>Ghost Button</Button>
      <Button block btnType="link" style={marginBottomStyle}>Link Button</Button>
    </>
  );
};
```

</demo>
