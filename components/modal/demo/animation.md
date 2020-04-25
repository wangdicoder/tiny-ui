<demo>

### Animation

Use `animation` to set different popup animation.

```jsx live
() => {
  const Wrapper = () => {
    const [visible1, setVisible1] = React.useState(false);
    const [visible2, setVisible2] = React.useState(false);
  
    return (
      <>
        <Button btnType="primary" onClick={() => setVisible1(true)}>
          Default Slide up and down
        </Button>
        <Button btnType="primary" onClick={() => setVisible2(true)}>
          Scale animation
        </Button>
        <Modal
          header="Default Slide up and down"
          visible={visible1}
          onOk={() => {}}
          onCancel={() => setVisible1(false)}>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
        </Modal>
        <Modal
          animation="scale"
          header="I'm a scale animation modal"
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
