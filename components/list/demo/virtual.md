<demo>

### Virtual Scroll

Render large lists efficiently with virtual scrolling. Only visible items are rendered to the DOM. Set `itemHeight` to match the actual rendered height of each item for smooth scrolling.

```jsx live
() => {
  const data = Array.from({ length: 10000 }, (_, i) => ({
    id: i,
    title: `Item ${i + 1}`,
    desc: `Description for item ${i + 1}`,
  }));

  return (
    <List
      virtual
      height={400}
      itemHeight={63}
      bordered
      header={<b>10,000 Items</b>}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <List.ItemMeta
            title={item.title}
            description={item.desc}
          />
        </List.Item>
      )}
    />
  );
}
```

</demo>
