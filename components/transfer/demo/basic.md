<demo>

### Basic

The most basic usage of `Transfer` involves providing the source data and target keys arrays, plus the rendering and some callback functions.

```jsx live
() => {
  const data = [];
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i + '',
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    });
  }

  return (
    <Transfer
      dataSource={data}
      defaultValue={['1', '4']}
      onChange={(targetKeys, direction, moveKeys) => {
        console.log(targetKeys, direction, moveKeys);
      }}
    />
  );
};
```

</demo>
