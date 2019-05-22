### Text & customise element

With text and customise element.

<!--start-code-->

```jsx
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

render(
  <Wrapper />
);
```

<!--end-code-->
