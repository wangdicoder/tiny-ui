### Basic

<!--start-code-->

```jsx
const deadline = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30);

render(
  <Countdown value={deadline} onFinish={() => console.log('done')}>
    {(val) => (
      <div>
        <span>{val.day}</span> Day
        <span>{val.hour}</span> Hour
        <span>{val.min}</span> Min
        <span>{val.sec}</span> Sec
      </div>
    )}
  </Countdown>
);
```

<!--end-code-->
