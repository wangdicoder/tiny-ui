<demo>

### Controlled dialog

Use `visible` prop to control the display of the card.

```jsx live
() => {
  const [visible, setVisible] = React.useState(false);

  const content = (
    <Button 
      link 
      onClick={() => setVisible(false)}>
      Close
    </Button>
  );

  return (
  <>
    <Popover
      visible={visible}
      onVisibleChange={(visible) => setVisible(visible)}
      trigger="click"
      title="Popover Title"
      content={content}>
      <Button color="primary">
        Click Me
      </Button>
    </Popover>
    <br/>
    <br/>
    <Switch checked={visible} onChange={(visible) => setVisible(visible)}/>
  </>
  );
};
```

</demo>
