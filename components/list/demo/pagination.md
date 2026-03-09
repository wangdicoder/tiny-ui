<demo>

### Pagination

Use `pagination` to add a pager to the list.

```jsx live
() => {
  const data = Array.from({ length: 25 }, (_, i) => `Item ${i + 1}`);

  return (
    <List
      bordered
      header="Paginated List"
      dataSource={data}
      pagination={{ pageSize: 5 }}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
}
```

</demo>
