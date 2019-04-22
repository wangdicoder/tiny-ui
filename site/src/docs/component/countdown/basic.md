### Basic

A basic example. 

<!--start-code-->

```jsx
const deadline = new Date(Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30);

render(
  <Countdown value={deadline} onFinish={() => console.log('done')}>
    {({ day, hour, min, sec }) => (
      <div>
        <span>{day}</span> Day
        <span>{hour}</span> Hour
        <span>{min}</span> Min
        <span>{sec}</span> Sec
      </div>
    )}
  </Countdown>
);
```

<!--end-code-->
