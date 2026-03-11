<Demo>

### Basic

A full-size calendar with date selection.

```jsx live
() => {
  const [value, setValue] = React.useState(new Date());

  return (
    <Calendar
      value={value}
      onChange={(date) => setValue(date)}
    />
  );
}
```

</Demo>
