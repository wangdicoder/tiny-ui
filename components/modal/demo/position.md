<demo>

### To customize the position of modal

Use `centered` or `top` or other styles to set position of modal dialog.

```jsx live
() => {
  const Wrapper = () => {
    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
  
    return (
      <>
        <Button btnType="primary" onClick={() => setVisible1(true)}>
          Display a modal dialog at 20px to the top
        </Button>
        <br/>
        <br/>
        <Button btnType="primary" onClick={() => setVisible2(true)}>
          Vertically centered modal dialog
        </Button>
        <Modal
          top={20}
          header="20px to Top"
          visible={visible1}
          onOk={() => {}}
          onCancel={() => setVisible1(false)}>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
        </Modal>
        <Modal
          centered
          header="Vertically centered modal dialog"
          visible={visible2}
          onOk={() => {}}
          onCancel={() => setVisible2(false)}>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
        </Modal>      
      </>
    );
  };
  
  return <Wrapper />;
}
```

</demo>
