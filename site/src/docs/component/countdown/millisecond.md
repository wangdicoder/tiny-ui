### Millisecond

<!--start-code-->

```jsx
const deadline = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30);

render(
  <Countdown milliSecond value={deadline} onFinish={() => console.log('done')}>
    {(val) => (
      <div>
        <span>{val.hour}</span> : 
        <span>{val.min}</span> : 
        <span>{val.sec}</span> : 
        <span>{val.milliSec}</span>
      </div>
    )}
  </Countdown>
);
```

<!--end-code-->
