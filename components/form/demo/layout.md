<demo>

### Form Layout

There are three layouts for form: `horizontal`, `vertical` and `inline`.

```jsx live
() => {
  const [type, setType] = React.useState('horizontal');

  return (
    <>
      <Radio.Group value={type} onChange={val => setType(val)}>
        <Radio value="horizontal">Horizontal</Radio>
        <Radio value="vertical">Vertical</Radio>
        <Radio value="inline">Inline</Radio>
      </Radio.Group>
      <br/>
      <br/>
      <br/>
      <Form initialValues={{ username: '', password: '' }} layout={type} style={{ maxWidth: type === 'inline' ? 'none' : 500 }}>  
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username' }]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password' }]}>
          <InputPassword />
        </Form.Item>
        <Form.Item>
          <Button btnType="primary" type="submit">Submit</Button>
        </Form.Item>
      </Form>
    </>
  );
}
```

</demo>
