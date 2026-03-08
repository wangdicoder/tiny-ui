<demo>

### Disabled Time Options

Use `disabledTime` to make certain hours, minutes, or seconds unselectable.

```jsx live
() => {
  const disabledTime = () => ({
    disabledHours: () => [0, 1, 2, 3, 4, 5, 22, 23],
    disabledMinutes: (hour) => hour === 12 ? [0, 30] : [],
    disabledSeconds: () => [],
  });
  return (
    <TimePicker
      disabledTime={disabledTime}
      placeholder="Business hours only"
    />
  );
}
```

</demo>
