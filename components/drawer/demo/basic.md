<demo>

### Basic

Basic drawer.

```jsx live
() => {
  const [visible, setVisible] = React.useState(false);

  return (
    <div>
      <Button color="primary" onClick={() => setVisible(true)}>
        Open
      </Button>
      <Drawer
        header="Basic Drawer"
        placement="right"
        onClose={() => setVisible(false)}
        visible={visible}>
          <div>Some contents...</div>
          <div>Some contents...</div>
          <div>Some contents...</div>
      </Drawer>
    </div>
  );
};
```

</demo>
