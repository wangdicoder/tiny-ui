### Controlled

By using the `visible` prop, you can control the close state of Tag.

<!--start-code-->

```jsx
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
      <Button color="primary" size="sm" onClick={() => setVisible(!visible)}>
        Toggle
      </Button>
    </>
  );
};

render(<ControlledTag />);
```

<!--end-code-->
