<demo>

### Basic

Basic usage. Type to see email suffix suggestions.

```jsx live
() => {
  const [options, setOptions] = React.useState([]);

  const handleSearch = (value) => {
    if (!value) {
      setOptions([]);
    } else {
      setOptions(
        ['gmail.com', 'outlook.com', 'qq.com'].map((domain) => ({
          value: `${value}@${domain}`,
        }))
      );
    }
  };

  return (
    <div style={{ width: 280 }}>
      <AutoComplete
        options={options}
        onSearch={handleSearch}
        placeholder="Enter email"
      />
    </div>
  );
}
```

</demo>
