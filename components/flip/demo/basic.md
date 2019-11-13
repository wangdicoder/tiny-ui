<demo>

### Basic

A basic flip

> **The flip's width and height must be set**

```jsx live
() => {
  const { Item } = Flip;
  
  const itemStyle = {
    color: '#fff',
    lineHeight: '200px',
    fontSize: '18px',
  };
  
  return (
    <Flip height={200} width={320}>
      <Item style={{ ...itemStyle, backgroundColor: '#00bcd4' }}>
        I'm front
      </Item>
      <Item style={{ ...itemStyle, backgroundColor: '#ff9800' }}>
        I'm back
      </Item>
    </Flip>
  );
}
```

</demo>
