<Demo>

### Value Style

Customize value appearance with `valueStyle` and `groupSeparator`.

```jsx live
() => {
  return (
    <div style={{ display: 'flex', gap: '48px' }}>
      <Statistic
        title="Revenue"
        value={1128930}
        prefix="$"
        valueStyle={{ color: '#52c41a' }}
      />
      <Statistic
        title="Loss"
        value={93120}
        prefix="$"
        valueStyle={{ color: '#f5222d' }}
      />
      <Statistic
        title="No Separator"
        value={9999999}
        groupSeparator=""
      />
    </div>
  );
}
```

</Demo>
