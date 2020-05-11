<demo>

### Type

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.

```jsx live
() => {
  const style = {
    marginRight: 10
  };
  
  return (
    <>
      <Avatar icon={<Icon name="user" size={20}/>} style={style}/>
      <Avatar style={style}>U</Avatar>
      <Avatar style={style}>USER</Avatar>
      <Avatar src="/avatar/avatar1.png" style={{ ...style }}/>
      <Avatar style={{ ...style, color: '#f56a00', backgroundColor: '#fde3cf' }}>LW</Avatar>
      <Avatar style={{ ...style, backgroundColor: '#87d068' }} icon={<Icon name="user" size={20}/>} />
    </>
  );
}
```

</demo>
