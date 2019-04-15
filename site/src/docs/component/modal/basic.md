### Basic

Basic modal.

<!--start-code-->

```jsx
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

render(<Wrapper />);
```

<!--end-code-->
