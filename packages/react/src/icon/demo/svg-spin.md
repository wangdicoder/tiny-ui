<Demo>

### Spin

Add a CSS animation to rotate icons. Useful for loading indicators.

```jsx live
() => {
  const spinStyle = {
    animation: 'spin 1s linear infinite',
  };
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 24 }}>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      <IconLoader style={spinStyle} />
      <IconLoaderQuarter style={spinStyle} />
      <IconLoader3quarter style={spinStyle} />
      <IconLoaderCircle style={spinStyle} />
      <IconSync style={spinStyle} />
    </div>
  );
}
```

</Demo>
