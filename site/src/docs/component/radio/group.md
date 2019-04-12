### Radio Group

A group of radio components.

<!--start-code-->

```jsx
const { Group } = Radio;

const Wrapper = () => {
  const [value, setValue] = React.useState('a');
  
  return(
    <Group value={value} onChange={(val) => setValue(val)}>
      <Radio value="a">A</Radio>
      <Radio value="b">B</Radio>
      <Radio value="c">C</Radio>
      <Radio value="d">D</Radio>
    </Group>
  );
};

render(
  <Wrapper />
);
```

<!--end-code-->
