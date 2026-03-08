<demo>

### Search

Select with search functionality. Set `showSearch` to enable filtering.

```jsx live
() => {
  const [value, setValue] = React.useState('');

  return (
    <div style={{ width: 240 }}>
      <Select
        showSearch
        placeholder="Search and select"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Select.Option value="apple">Apple</Select.Option>
        <Select.Option value="banana">Banana</Select.Option>
        <Select.Option value="cherry">Cherry</Select.Option>
        <Select.Option value="dragonfruit">Dragon Fruit</Select.Option>
        <Select.Option value="elderberry">Elderberry</Select.Option>
        <Select.Option value="fig">Fig</Select.Option>
      </Select>
    </div>
  );
}
```

</demo>
