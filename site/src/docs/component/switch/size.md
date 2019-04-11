### Different sizes

`size` attribute represents different sized switches.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [checked, setChecked] = React.useState(true);
  
  return (
    <div>
      <Switch
        size="sm"
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        checkedText="sm"
      />
      <br/><br/>
      <Switch
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        checkedText="md"
      />
      <br/><br/>
      <Switch
        size="lg"
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        checkedText="lg"
      />
    </div>
  );
}

render(
  <Wrapper />
);
```

<!--end-code-->
