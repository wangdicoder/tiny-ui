<demo>

### Search

Transfer with a search box.

```jsx live
() => {
  const data = [];
  for (let i = 1; i <= 20; i++) {
    data.push({
      key: i + '',
      label: `content${i}`,
      disabled: i % 4 === 0,
    });
  }

  return (
    <Transfer
      showSearch
      dataSource={data}
      defaultValue={['1', '4', '5', '6,', '7', '20']}
      onChange={(targetKeys, direction, moveKeys) => {
        console.log(targetKeys, direction, moveKeys);
      }}
    />
  );
};
```

</demo>
