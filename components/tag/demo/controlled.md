<demo>

### Controlled

By using the `visible` prop, you can control the close state of Tag.

```jsx live
() => {
  const ControlledTag = () => {
    const [visible, setVisible] = React.useState(true);
  
    return (
      <>
        <Tag
          closable
          visible={visible}
          onClose={() => setVisible(false)}>
          Movies
        </Tag>
        <br />
        <br />
        <Button btnType="primary" size="sm" onClick={() => setVisible(!visible)}>
          Toggle
        </Button>
      </>
    );
  };
  
  return <ControlledTag />;
}
```

</demo>
