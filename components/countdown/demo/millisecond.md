<demo>

### Millisecond

Allow to display millisecond

```jsx live
() => {
  const deadline = new Date(Date.now() + 1000 * 60 * 60 * 2 + 1000 * 30);
  
  return (
    <Countdown millisec value={deadline} onFinish={() => console.log('done')}>
      {(val) => (
        <div>
          <span>{val.hour}</span> : 
          <span>{val.min}</span> : 
          <span>{val.sec}</span> : 
          <span>{val.millisec}</span>
        </div>
      )}
    </Countdown>
  );
}
```

</demo>
