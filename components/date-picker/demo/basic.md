<demo>

### Basic

A basic date picker.

```jsx live
() => {
  const [date, setDate] = React.useState(new Date());
  return (
    <DatePicker
      value={date}
      onChange={(d) => setDate(d)}
    />
  );
}
```

</demo>
