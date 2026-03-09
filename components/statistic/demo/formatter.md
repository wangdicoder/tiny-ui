<demo>

### Custom Formatter

Use `formatter` to fully customize the value display.

```jsx live
() => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <Statistic
        title="Countdown"
        value={Date.now() + 86400000}
        formatter={(val) => {
          const diff = Math.max(0, Math.floor((Number(val) - Date.now()) / 3600000));
          return `${diff}h remaining`;
        }}
      />
      <Statistic
        title="Score"
        value={9.8}
        formatter={(val) => <span style={{ color: '#52c41a' }}>{val} / 10</span>}
      />
    </div>
  );
}
```

</demo>
