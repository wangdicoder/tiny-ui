<demo>

### Size

Use `size` to set different size of select

```jsx live
() => {
  const { Option } = NativeSelect;
  
  return (
    <div style={{width: 300}}>
      <NativeSelect size="sm">
        <Option>Tom</Option>
        <Option>Oliver</Option>
        <Option>Jack</Option>
      </NativeSelect>
      
      <NativeSelect style={{margin: '10px 0'}}>
        <Option>Tom</Option>
        <Option>Oliver</Option>
        <Option>Jack</Option>
      </NativeSelect>
          
      <NativeSelect size="lg">
        <Option>Tom</Option>
        <Option>Oliver</Option>
        <Option>Jack</Option>
      </NativeSelect>
    </div>
  );
}
```

</demo>
