<Demo>

### Sizes

Three sizes: `sm`, `md` (default), and `lg`.

```jsx live
<div style={{ width: 240, display: 'flex', flexDirection: 'column', gap: 12 }}>
  <Select size="sm" placeholder="Small" defaultValue="apple">
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="banana">Banana</Select.Option>
  </Select>
  <Select size="md" placeholder="Medium" defaultValue="apple">
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="banana">Banana</Select.Option>
  </Select>
  <Select size="lg" placeholder="Large" defaultValue="apple">
    <Select.Option value="apple">Apple</Select.Option>
    <Select.Option value="banana">Banana</Select.Option>
  </Select>
</div>
```

</Demo>
