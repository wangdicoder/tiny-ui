<demo>

### Presence Indicator

Avatar also support presence indicators. Add `online`, `busy`, `away` or `offline` attribute for different status colors.

```jsx live
() => {
  const style = {
    marginRight: 10
  };
  
  return (
    <>
      <Avatar size={70} presence="online" style={style}>JT</Avatar>
      <Avatar size={50} presence="busy" style={style}>JT</Avatar>
      <Avatar size={40} presence="away" style={style}>JT</Avatar>
      <Avatar size={30} presence="offline" style={style}>JT</Avatar>
    </>
  );
}
```

</demo>
