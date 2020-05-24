<demo>

### Gutter

Use the `gutter` property of `Row` as grid spacing. It is recommended to set it to `(16 + 8n)` px. (`n` stands for natural number.)

```jsx live
() => {
  const box = {
    padding: '20px 0',
    color: '#fff',
    textAlign: 'center',
  };

  const lighterBox = {
    backgroundColor: '#6E41BFD6',
  };
 
  const darkerBox = {
    backgroundColor: '#6E41BFFA',
  };

  return (
    <>
      <Row gutter={16} gutterSide>
        <Col span={6}><div style={{...box, ...darkerBox}}>col-6</div></Col>
        <Col span={6}><div style={{...box, ...lighterBox}}>col-6</div></Col>
        <Col span={6}><div style={{...box, ...darkerBox}}>col-6</div></Col>
        <Col span={6}><div style={{...box, ...lighterBox}}>col-6</div></Col>
      </Row>
    </>
  )
}
```

</demo>
