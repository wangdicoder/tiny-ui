### Text & customise element

With text and customise element.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [checked, setChecked] = React.useState(true);
  
  return (
    <div>
      <Switch
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        checkedText="On"
        uncheckedText="Off"
      />
      <br/><br/>
      <Switch
        checked={checked}
        onChange={(checked) => setChecked(checked)}
        checkedText="开"
        uncheckedText="关"
      />
    </div>
  );
}

render(
  <Wrapper />
);
```

<!--end-code-->
