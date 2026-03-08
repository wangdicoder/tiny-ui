<demo>

### Hide Disabled Options

Combine `disabledTime` with `hideDisabledOptions` to remove unavailable times from the panel entirely.

```jsx live
() => {
  const disabledTime = () => ({
    disabledHours: () => [0, 1, 2, 3, 4, 5, 6, 20, 21, 22, 23],
  });
  return (
    <TimePicker
      disabledTime={disabledTime}
      hideDisabledOptions
      placeholder="7:00 - 19:00"
    />
  );
}
```

</demo>
