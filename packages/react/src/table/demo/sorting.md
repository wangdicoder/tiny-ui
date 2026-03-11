<Demo>

### Sorting

Click column headers to cycle through ascending, descending, and unsorted states.

```jsx live
() => {
  const columns = [
    { title: 'Name', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name) },
    { title: 'Score', dataIndex: 'score', sorter: (a, b) => a.score - b.score, defaultSortOrder: 'descend' },
    { title: 'Grade', dataIndex: 'grade' },
  ];

  const data = [
    { key: '1', name: 'Alice', score: 92, grade: 'A' },
    { key: '2', name: 'Bob', score: 78, grade: 'B' },
    { key: '3', name: 'Charlie', score: 88, grade: 'A-' },
    { key: '4', name: 'Diana', score: 95, grade: 'A+' },
    { key: '5', name: 'Eve', score: 65, grade: 'C' },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
    />
  );
}
```

</Demo>
