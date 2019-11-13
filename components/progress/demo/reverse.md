<demo>

### Reverse direction

Set `reverse` to control the direction.

> This is only for **Circle** progress.

```jsx live
() => {
  const { Bar, Circle } = Progress;
  const { Group } = Button;
  
  const Wrapper = () => {
    const [percent, setPercent] = React.useState(0);
  
    return (
      <div>
        <Group style={{ marginBottom: 20 }}>
          <Button onClick={() => (percent > 0) && setPercent(percent - 10)}>-</Button>
          <Button onClick={() => (percent < 100) && setPercent(percent + 10)}>+</Button>
        </Group>
        
        <br/>
        
        <Circle percent={percent} reverse/>
        <Circle percent={percent} style={{ marginLeft: 10 }}/>
      </div>
    );
  };
  
  return (
    <Wrapper />
  );
}
```

</demo>
