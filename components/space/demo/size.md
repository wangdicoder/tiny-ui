<demo>

### Space Size

`small`, `medium` and `large` preset sizes.

```jsx live
() => {
  const [size, setSize] = React.useState('sm');
  const [numSize, setNumSize] = React.useState(10);
  
  return (
    <>
      <Divider align="left">Use Preset</Divider>
      <Radio.Group value={size} onChange={val => setSize(val)}>
        <Radio value="sm">Small</Radio>
        <Radio value="md">Medium</Radio>
        <Radio value="lg">Large</Radio>
      </Radio.Group>
      <br />
      <br />
      <Space size={size}>
        <Button btnType="primary">Primary</Button>
        <Button>Default</Button>
        <Button btnType="outline">Outline</Button>
        <Button btnType="link">Link</Button>
      </Space>

      <br />
      <br />
      <Divider align="left">Use Number</Divider>
      <Slider value={numSize} onChange={(val) => setNumSize(val)}/>
      <Space size={numSize}>
        <Button btnType="primary">Primary</Button>
        <Button>Default</Button>
        <Button btnType="outline">Outline</Button>
        <Button btnType="link">Link</Button>
      </Space>
    </>
  );
}
```

</demo>
