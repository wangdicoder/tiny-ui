### Blur the container

Use `blurred` to control the container overlay.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [blurred, setBlurred] = React.useState(true);

  return (
    <>
      <Loader blurred={blurred}>
        <Alert
          title="Alert message title"
          type="info">
          Further details about the context of this alert.
        </Alert>
      </Loader>
      <div style={{ marginTop: 16 }}>
        Blurred state：
        <Switch checked={blurred} onChange={(val) => setBlurred(val)} />
      </div>
    </>
  );
};

render(
  <Wrapper />
);
```

<!--end-code-->
