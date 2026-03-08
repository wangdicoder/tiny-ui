<demo>

### Basic

A basic date picker with a "Today" shortcut.

```jsx live
() => {
  const [date, setDate] = React.useState(new Date());
  return (
    <DatePicker
      value={date}
      onChange={(d, str) => { setDate(d); console.log(str); }}
    />
  );
}
```

</demo>
