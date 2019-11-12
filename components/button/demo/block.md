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
      <Button block color="primary" style={marginBottomStyle}>Primary Button</Button>
      <Button block link style={marginBottomStyle}>Link</Button>
    </>
  );
};
```

</demo>
