<demo>

### Precision

Set decimal precision with `precision`, and use `controls` to always show step buttons.

```jsx live
() => {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <InputNumber defaultValue={3.14} precision={2} step={0.1} min={0} max={10} controls />
      <InputNumber defaultValue={100} precision={0} step={10} min={0} max={1000} controls />
    </div>
  );
}
```

</demo>
