<demo>

### Customized Footer

A more complex example which define a customized footer button bar, the dialog will change to loading state after clicking submit button, when the loading is over, the modal dialog will be closed.
Set `footer={null}` if you don't need default footer buttons.

<!--start-code-->

```jsx live
() => {
  const Wrapper = () => {
    const [visible, setVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
  
    const _handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setVisible(false);
      }, 3000);
    };
  
    return (
      <>
        <Button color="primary" onClick={() => setVisible(true)}>Open Modal</Button>
        <Modal
          header="Custom Footer"
          visible={visible}
          onConfirm={_handleConfirm}
          onCancel={() => setVisible(false)}
          confirmText="Submit"
          cancelText="Reture"
          confirmLoading={loading}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
      </>
    );
  };
  
  return <Wrapper />;
}
```

</demo>
