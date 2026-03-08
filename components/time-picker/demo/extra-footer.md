<demo>

### Extra Footer

Render extra content at the bottom of the dropdown panel.

```jsx live
() => {
  const [time, setTime] = React.useState(null);
  return (
    <TimePicker
      value={time}
      onChange={setTime}
      placeholder="With footer"
      renderExtraFooter={() => (
        <Button
          size="sm"
          btnType="link"
          onClick={() => setTime(new Date())}>
          Now
        </Button>
      )}
    />
  );
}
```

</demo>
