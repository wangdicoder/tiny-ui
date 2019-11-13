<demo>

### Basic

Basic modal.

<!--start-code-->

```jsx live
() => {
  const Wrapper = () => {
    const [visible, setVisible] = React.useState(false);
  
    return (
      <>
        <Button color="primary" onClick={() => setVisible(true)}>Open Modal</Button>
        <Modal
          header="Basic Modal"
          visible={visible}
          onOk={() => {}}
          onCancel={() => setVisible(false)}>
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
