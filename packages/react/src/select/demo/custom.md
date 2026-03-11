<Demo>

### Custom Rendering & Loading

Use the `options` prop for data-driven rendering, `optionRender` for custom option content, and `loading` for async states.

```jsx live
() => {
  const [loading, setLoading] = React.useState(false);
  const [options, setOptions] = React.useState([
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
  ]);

  const handleSearch = (val) => {
    if (val) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  };

  return (
    <div style={{ width: 300 }}>
      <Select
        showSearch
        placeholder="Select a framework"
        options={options}
        loading={loading}
        onSearch={handleSearch}
        optionRender={(opt, { index }) => (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{opt.label}</span>
            <span style={{ color: '#999' }}>#{index + 1}</span>
          </div>
        )}
        allowClear
      />
    </div>
  );
}
```

</Demo>
