<Demo>

### Custom Filter

Use `filterOption` to implement custom filtering logic.

```jsx live
() => {
  const options = [
    { value: 'React' },
    { value: 'Vue' },
    { value: 'Angular' },
    { value: 'Svelte' },
  ];

  const filterOption = (inputValue, option) => {
    return option.value.toLowerCase().startsWith(inputValue.toLowerCase());
  };

  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        options={options}
        filterOption={filterOption}
        placeholder="Search frameworks"
      />
    </div>
  );
}
```

</Demo>
