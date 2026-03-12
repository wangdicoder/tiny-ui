<Demo>

### Spin

Use the `withSpin` HOC to create a spinning variant of any icon. Useful for loading indicators.

```jsx live
() => {
  const SpinLoader = withSpin(IconLoader);
  const SpinLoaderQuarter = withSpin(IconLoaderQuarter);
  const SpinLoader3quarter = withSpin(IconLoader3quarter);
  const SpinLoaderCircle = withSpin(IconLoaderCircle);
  const SpinSync = withSpin(IconSync);
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center', fontSize: 24 }}>
      <SpinLoader />
      <SpinLoaderQuarter />
      <SpinLoader3quarter />
      <SpinLoaderCircle />
      <SpinSync />
    </div>
  );
}
```

</Demo>
