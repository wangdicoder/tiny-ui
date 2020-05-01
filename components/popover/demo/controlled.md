<demo>

### Controlled dialog

Use `visible` prop to control the display of the card.

```jsx live
() => {
  const [visible, setVisible] = React.useState(false);

  const content = (
    <Button 
      btnType="ghost" 
      onClick={() => setVisible(false)}>
      Close
    </Button>
  );

  return (
  <>
    <Popover
      visible={visible}
      onVisibleChange={(visible) => setVisible(visible)}
      title="Popover Title"
      content={content}>
      <Button btnType="primary">
        Click Me
      </Button>
    </Popover>
  </>
  );
};
```

</demo>
