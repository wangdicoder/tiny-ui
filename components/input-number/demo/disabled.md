<demo>

### Disabled

Click the button to toggle between available and disabled states.

```jsx live
() => {
  const [disabled, setDisabled] = React.useState(true);

  return (
    <div style={{ width: 400 }}>
      <InputNumber disabled={disabled} min={0} max={10} defaultValue={5} />
      <br/>
      <Button 
        onClick={() => setDisabled(!disabled)} color="primary">
        Toggle disabled
      </Button>
    </div>
  );
}
```

</demo>
