<demo>

### Basic

The simplest use.

```jsx live
() => {
  const onChange = (e) => {
    console.log(e.currentTarget.checked);
  };
  
  return (
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
  );
}
```

</demo>
