<Demo>

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
        <Avatar icon={<IconUser size={50} />} size={70} style={style}/>
        <Avatar icon={<IconUser size={35} />} size={50} style={style}/>
        <Avatar icon={<IconUser size={25} />} style={style}/>
        <Avatar icon={<IconUser />} size={24} style={style}/>
      </div>
      <br/>
      <div>
        <Avatar shape="square" icon={<IconUser size={50} />} size={70} style={style}/>
        <Avatar shape="square" icon={<IconUser size={35} />} size={50} style={style}/>
        <Avatar shape="square" icon={<IconUser size={25} />} style={style}/>
        <Avatar shape="square" icon={<IconUser />} size={24} style={style}/>
      </div>
    </>
  );
}
```

</Demo>
