### Disabled

Disabled state of Switch.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [disabled, setDisabled] = React.useState(true);
  
  return (
    <>
      <Switch
        disabled={disabled}
      />
      <br/><br/>
      <Button color="primary" onClick={() => setDisabled(!disabled)}>Toggle Disabled</Button>
    </>
  );
}

render(
  <Wrapper />
);
```

<!--end-code-->
