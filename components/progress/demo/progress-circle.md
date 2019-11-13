<demo>

### Progress circular

A circular progress.

```jsx live
() => {
  const { Circle } = Progress;
  
  const style = {
      marginRight: '10px',
  };
  
  return (
    <div>
      <Circle percent={10} style={style}/>
      <Circle percent={30} strokeColor="yellow" style={style}/>
      <Circle percent={50} strokeColor="red" style={style}/>
      <Circle percent={70} strokeColor="blue" style={style}/>
      <Circle percent={100} strokeColor="blue" style={style}/>
      <Circle percent={100} strokeColor="green"/>
    </div>
  );
}
```

</demo>
