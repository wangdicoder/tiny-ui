<demo>

### Copy from input

```jsx live
() => {
  const [text, setText] = React.useState('');
  
  return (
  <div>
    <Input onChange={e => setText(e.currentTarget.value)} placeholder="Inout something and then click button"/>
    <CopyToClipboard text={text} onClick={() => Message.success('Copy successfully')}>
      <Button btnType="primary" style={{ marginTop: 5 }}>Copy</Button>
    </CopyToClipboard>
    <br/>
    <br/>
    <Input placeholder="Paste here"/>
  </div>
)};
```

</demo>
