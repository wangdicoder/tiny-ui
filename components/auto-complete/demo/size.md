<demo>

### Size

Three sizes: `sm`, `md` (default) and `lg`.

```jsx live
() => {
  const options = [
    { value: 'React' },
    { value: 'Vue' },
    { value: 'Angular' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 280 }}>
      <AutoComplete options={options} size="sm" placeholder="Small" />
      <AutoComplete options={options} size="md" placeholder="Medium" />
      <AutoComplete options={options} size="lg" placeholder="Large" />
    </div>
  );
}
```

</demo>
