### Different sizes

`size` attribute represents different sized switches.

<!--start-code-->

```jsx
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

render(
  <Wrapper />
);
```

<!--end-code-->
