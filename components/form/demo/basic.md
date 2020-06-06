<demo>

### Basic usage

Basic Form data control.

```jsx live
<Form 
  onFinish={(values) => console.log(values)}
  onFinishFailed={({values, errors}) => console.log(values, errors)}
  initialValues={{ username: '', password: '', remember: true }} 
  style={{ maxWidth: 500 }}>  
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
  <Form.Item
    valuePropName="checked"
    name="remember">
    <Checkbox>Remember Me</Checkbox>
  </Form.Item>
  <Form.Item>
    <>
      <Button btnType="primary" type="submit">Submit</Button>
      <Button type="reset">Reset</Button>
    </> 
  </Form.Item>
</Form>
```

</demo>
