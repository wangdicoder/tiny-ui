### Basic

The simplest use.

<!--start-code-->

```jsx
const Wrapper = () => {
  const [checked, setChecked] = React.useState(false);
  
  return(
    <Radio checked={checked} onChange={(val) => setChecked(val)}>I'm a Radio</Radio>
  );
};

render(
  <Wrapper />
);
```

<!--end-code-->
