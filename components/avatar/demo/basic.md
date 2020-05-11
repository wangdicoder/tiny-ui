<demo>

### Basic

Different sizes setting by `size` and two shapes are available.

```jsx live
() => {
  const style = {
    marginRight: 10
  };
  
  return (
    <>
      <div>
        <Avatar icon={<Icon name="user" size={50} />} size={70} style={style}/>
        <Avatar icon={<Icon name="user" size={35} />} size={50} style={style}/>
        <Avatar icon={<Icon name="user" size={25} />} style={style}/>
        <Avatar icon={<Icon name="user" />} size={24} style={style}/>
      </div>
      <br/>
      <div>
        <Avatar shape="square" icon={<Icon name="user" size={50} />} size={70} style={style}/>
        <Avatar shape="square" icon={<Icon name="user" size={35} />} size={50} style={style}/>
        <Avatar shape="square" icon={<Icon name="user" size={25} />} style={style}/>
        <Avatar shape="square" icon={<Icon name="user" />} size={24} style={style}/>
      </div>
    </>
  );
}
```

</demo>
