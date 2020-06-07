<demo>

### Create in `Modal`

Create a form in a `Modal`.

```jsx live
() => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button btnType="primary" onClick={() => setVisible(true)}>New Form</Button>
      <Modal
        visible={visible}
        header="Create a new form"
        footer={null}
        onCancel={() => setVisible(false)}>
        <Form 
          onFinish={(values) => console.log(values)}
          onFinishFailed={({values, errors}) => console.log(values, errors)}
          initialValues={{ title: '', desc: '' }} 
          style={{ maxWidth: 500 }}>  
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="desc">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button block btnType="primary" type="submit">Submit</Button>
          </Form.Item>
        </Form>    
      </Modal>
    </>
  );
}
```

</demo>
