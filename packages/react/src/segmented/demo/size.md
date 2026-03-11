<Demo>

### Size

Three sizes: `sm`, `md`, and `lg`.

```jsx live
() => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Segmented options={['Small', 'Medium', 'Large']} size="sm" />
      <Segmented options={['Small', 'Medium', 'Large']} size="md" />
      <Segmented options={['Small', 'Medium', 'Large']} size="lg" />
    </div>
  );
}
```

</Demo>
