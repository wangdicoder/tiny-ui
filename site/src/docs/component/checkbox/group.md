### Checkbox Group

A group of checkbox components.

<!--start-code-->

```jsx
const { Group } = Checkbox;

render(
  <Group defaultValue={['a', 'b']} onChange={(val) => console.log(val)}>
    <Checkbox value="a">A</Checkbox>
    <Checkbox value="b">B</Checkbox>
    <Checkbox value="c">C</Checkbox>
  </Group>
);
```

<!--end-code-->
