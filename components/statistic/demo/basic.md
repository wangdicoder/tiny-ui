<demo>

### Basic

Display a statistic with title and formatted value.

```jsx live
() => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <Statistic title="Active Users" value={112893} />
      <Statistic title="Account Balance" value={112893} precision={2} prefix="$" />
      <Statistic title="Growth Rate" value={93.12} suffix="%" precision={2} />
    </div>
  );
}
```

</demo>
