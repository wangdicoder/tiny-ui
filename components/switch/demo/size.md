<demo>

### Different sizes

`size` attribute represents different sized switches.

```jsx live
() => {
  const Wrapper = () => {
    return (
      <div>
        <Switch
          size="sm"
          checkedText="sm"
        />
        <br/><br/>
        <Switch
          checkedText="md"
        />
        <br/><br/>
        <Switch
          size="lg"
          checkedText="lg"
        />
      </div>
    );
  }
  
  return (
    <Wrapper />
  );
}
```

</demo>
