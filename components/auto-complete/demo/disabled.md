<Demo>

### Disabled

A disabled AutoComplete.

```jsx live
() => {
  const options = [
    { value: 'React' },
    { value: 'Vue' },
    { value: 'Angular' },
  ];

  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        options={options}
        defaultValue="React"
        disabled
        placeholder="Disabled"
      />
    </div>
  );
}
```

</Demo>
