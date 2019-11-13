<demo>

### Disabled

Disabled state of Switch.

```jsx live
() => {
  const Wrapper = () => {
    const [disabled, setDisabled] = React.useState(true);
    
    return (
      <>
        <Switch disabled={disabled} />
        <br/><br/>
        <Button color="primary" onClick={() => setDisabled(!disabled)}>
          Toggle Disabled
        </Button>
      </>
    );
  }
  
  return (
    <Wrapper />
  );
}
```

</demo>
