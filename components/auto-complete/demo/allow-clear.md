<Demo>

### Allow Clear

Set `allowClear` to show a clear button when the input has a value.

```jsx live
() => {
  const options = [
    { value: 'React' },
    { value: 'Vue' },
    { value: 'Angular' },
    { value: 'Svelte' },
  ];

  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        options={options}
        allowClear
        placeholder="Type and clear"
      />
    </div>
  );
}
```

</Demo>
