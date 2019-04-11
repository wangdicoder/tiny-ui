### Basic

The most basic usage.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [checked, setChecked] = React.useState(true);
  
  return (
    <Switch
      checked={checked}
      onChange={(checked) => setChecked(checked)}
    />
  );
}

render(
  <Wrapper />
);
```

<!--end-code-->
