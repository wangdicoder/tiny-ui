<demo>

### Basic

The simplest use.

```jsx live
() => {
  const onChange = (e) => {
    console.log(e.currentTarget.value);
  };
  
  return (
    <Checkbox onChange={onChange}>Checkbox</Checkbox>
  );
}
```

</demo>
