<demo>

### Placement

The Drawer can appear from any edge of the screen.

```jsx live
() => {
const { Group } = Radio;
  
  const Wrapper = () => {
    const [visible, setVisible] = React.useState(false);
    const [placement, setPlacement] = React.useState('left');
    
    return(
      <>
        <Group value={placement} onChange={(val) => setPlacement(val)}>
          <Radio value="top">Top</Radio>
          <Radio value="bottom">Bottom</Radio>
          <Radio value="left">Left</Radio>
          <Radio value="right">Right</Radio>
        </Group>
        <br/>
        <br/>

        <Button btnType="primary" onClick={() => setVisible(true)}>
          Open
        </Button>

        <Drawer
          header="Basic Drawer"
          placement={placement}
          onClose={() => setVisible(false)}
          visible={visible}>
            <div>Some contents...</div>
            <div>Some contents...</div>
            <div>Some contents...</div>
        </Drawer>
      </>
    );
  };
  
  return (
    <Wrapper />
  );
};
```

</demo>
