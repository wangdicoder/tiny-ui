<demo>

### Basic

The simplest use.

```jsx live
() => {
  const onChange = (val, e) => {
    console.log(val);
  };
  
  return (
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
  );
}
```

</demo>
