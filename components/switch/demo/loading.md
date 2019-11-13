<demo>

### Loading

Mark a pending state of switch.

```jsx live
() => {
  const Wrapper = () => {
    return (
      <div>
        <Switch
          loading
          checked={true}
        />
        <br/><br/>
        <Switch
          loading
          checked={false}
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
