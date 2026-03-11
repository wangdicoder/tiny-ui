<Demo>

### Custom Rendering

Use `renderItem` to customize each item's display.

```jsx live
() => {
  const data = Array.from({ length: 10 }, (_, i) => ({
    key: `item-${i}`,
    label: `Item ${i + 1}`,
    disabled: i === 3,
  }));

  return (
    <Transfer
      dataSource={data}
      defaultValue={['item-1', 'item-4']}
      titles={['Source', 'Target']}
      renderItem={(item) => (
        <span>
          {item.disabled ? '🔒 ' : '📄 '}
          {item.label}
        </span>
      )}
      showSearch
    />
  );
}
```

</Demo>
