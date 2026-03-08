<demo>

### Basic

A simple table with columns, sorting, and row selection.

```jsx live
() => {
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age', sorter: (a, b) => a.age - b.age },
    { title: 'Address', dataIndex: 'address', key: 'address' },
  ];

  const data = [
    { key: '1', name: 'John Brown', age: 32, address: 'New York No. 1' },
    { key: '2', name: 'Jim Green', age: 42, address: 'London No. 1' },
    { key: '3', name: 'Joe Black', age: 28, address: 'Sydney No. 1' },
    { key: '4', name: 'Jane White', age: 35, address: 'Tokyo No. 1' },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      bordered
    />
  );
}
```

</demo>
