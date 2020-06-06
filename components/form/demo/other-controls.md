<demo>

### Other Form Controls

A versatile example.

```jsx live
<Form 
  onFinish={(values) => console.log(values)}
  onFinishFailed={({values, errors}) => console.log(values, errors)}
  initialValues={{ number: 10, switch: true, radios: '', checks: ['check1'], slide: 20, rate: 3, comment: '' }} 
  style={{ maxWidth: 500 }}>
  <Form.Item label="Plain Text">
    <span>A form</span>
  </Form.Item>
  <Form.Item
    label="Input Number"
    name="number"
    rules={[{ max: 10 }]}>
    <InputNumber />
  </Form.Item>
  <Form.Item
    label="Switch"
    name="switch"
    valuePropName="checked">
    <Switch />
  </Form.Item>
  <Form.Item
    label="Radio Group"
    name="radios"
    rules={[{ required: true }]}>
    <Radio.Group>
      <Radio value="radio1">Radio 1</Radio>
      <Radio value="radio2">Radio 2</Radio>
      <Radio value="radio3">Radio 3</Radio>
    </Radio.Group>
  </Form.Item>
  <Form.Item
    label="Check Group"
    name="checks"
    rules={[{ required: true }]}>
    <Checkbox.Group>
      <Checkbox value="check1">Check 1</Checkbox>
      <Checkbox value="check2">Check 2</Checkbox>
      <Checkbox value="check3">Check 3</Checkbox>
    </Checkbox.Group>
  </Form.Item>
  <Form.Item
    label="Slider"
    name="slide">
    <Slider
      dots
      step={20}
      marks={{
        0: 'A',
        20: 'B',
        40: 'C',
        60: 'D',
        80: 'E',
        100: 'F',
      }}
    />
  </Form.Item>
  <Form.Item
    label="Rate"
    name="rate">
    <Rate />
  </Form.Item>
  <Form.Item
    label="Comments"
    name="comment"
    rules={[{ required: true }]}>
    <Textarea rows={4} placeholder="Leaving something will be great"/>
  </Form.Item>
  <Form.Item>
    <Button block btnType="primary" type="submit">Submit</Button>
  </Form.Item>
</Form>
```

</demo>
