<demo>

### Form method

Call form method with `Form.useForm`.

```jsx live
() => {
  const [form] = Form.useForm({ username: '', password: '' });

  const resetForm = () => {
    form.resetFields();
  };

  const fillForm = () => {
    form.setFieldValues({ username: 'React', password: 'React' })
  };

  return (
    <Form form={form} style={{ maxWidth: 500 }}>  
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
        <>
        <Button btnType="primary" type="submit">Submit</Button>
        <Button type="button" onClick={resetForm}>Reset</Button>
        <Button btnType="link" type="button" onClick={fillForm}>Fill form</Button>
        </>
      </Form.Item>
    </Form>
  );
};
```

</demo>
