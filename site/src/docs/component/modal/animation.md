### Animation

Use `animation` to set different popup animation.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [visible1, setVisible1] = React.useState(false);
  const [visible2, setVisible2] = React.useState(false);

  return (
    <>
      <Button color="primary" onClick={() => setVisible1(true)}>
        Default Slide up and down
      </Button>
      <Button color="primary" onClick={() => setVisible2(true)}>
        Scale animation
      </Button>
      <Modal
        header="Default Slide up and down"
        visible={visible1}
        onOk={() => {}}
        onCancel={() => setVisible1(false)}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
      </Modal>
      <Modal
        animation="scale"
        header="I'm a scale animation modal"
        visible={visible2}
        onOk={() => {}}
        onCancel={() => setVisible2(false)}>
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
