<demo>

### Checkbox Group

A group of checkbox components.

```jsx live
() => {
  const { Group } = Checkbox;
  
  return (
    <Group defaultValue={['a', 'b']} onChange={(val) => console.log(val)}>
      <Checkbox value="a">A</Checkbox>
      <Checkbox value="b">B</Checkbox>
      <Checkbox value="c">C</Checkbox>
    </Group>
  );
}
```

</demo>
