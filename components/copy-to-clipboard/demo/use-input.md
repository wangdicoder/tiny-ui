<demo>

### Copy from input

```jsx live
() => {
  const [text, setText] = React.useState('');
  
  return (
  <div>
    <Input onChange={value => setText(value)} placeholder="Inout something and then click button"/>
    <CopyToClipboard text={text} onClick={() => Message.success('Copy successfully')}>
      <Button color="primary" style={{ marginTop: 5 }}>Copy</Button>
    </CopyToClipboard>
    <br/>
    <br/>
    <Input placeholder="Paste here"/>
  </div>
)};
```

</demo>
