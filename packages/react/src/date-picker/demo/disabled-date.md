<Demo>

### Disabled Date

Use `disabledDate` to make specific dates unselectable. This example disables all past dates.

```jsx live
() => {
  const disabledDate = (current) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return current < today;
  };
  return (
    <DatePicker
      disabledDate={disabledDate}
      placeholder="No past dates"
    />
  );
}
```

</Demo>
