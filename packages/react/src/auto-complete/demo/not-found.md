<Demo>

### Not Found Content

Use `notFoundContent` to display a message when no options match.

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
        notFoundContent="No results found"
        placeholder="Try typing something"
      />
    </div>
  );
}
```

</Demo>
