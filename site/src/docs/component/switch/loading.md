### Loading

Mark a pending state of switch.

<!--start-code-->

```jsx
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

render(
  <Wrapper />
);
```

<!--end-code-->
