<Demo>

### Format

Use `format` to control what's displayed. Omitting seconds hides the seconds column.

```jsx live
() => {
  return (
    <Space direction="vertical">
      <TimePicker format="HH:mm:ss" placeholder="HH:mm:ss" />
      <TimePicker format="HH:mm" placeholder="HH:mm (no seconds)" />
    </Space>
  );
}
```

</Demo>
