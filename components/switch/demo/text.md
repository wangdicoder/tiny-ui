<demo>

### Text & customise element

With text and customise element.

```jsx live
() => {
  const Wrapper = () => {
    return (
      <div>
        <Switch
          checkedText="On"
          uncheckedText="Off"
        />
        <br/><br/>
        <Switch
          checkedText="开"
          uncheckedText="关"
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
