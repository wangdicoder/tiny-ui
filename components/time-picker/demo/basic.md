<demo>

### Basic

A basic time picker.

```jsx live
() => {
  const [time, setTime] = React.useState(new Date());
  return (
    <TimePicker
      value={time}
      onChange={(t) => setTime(t)}
    />
  );
}
```

</demo>
