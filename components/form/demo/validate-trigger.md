<demo>

### Validation Trigger

There are three different triggers for the form validation: `onChange`, `onBlur` and `onSubmit`.

```jsx live
() => {
  return (
    <>
      <Divider align="left">onChange</Divider>
      <Form initialValues={{ username: '', password: '' }} style={{ maxWidth: 500 }}>  
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
  
      <Divider align="left">onBlur</Divider>
      <Form validateTrigger="onBlur" initialValues={{ username: '', password: '' }} style={{ maxWidth: 500 }}>  
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
    
      <Divider align="left">onSubmit</Divider>
      <Form validateTrigger="onSubmit" initialValues={{ username: '', password: '' }} style={{ maxWidth: 500 }}>  
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
