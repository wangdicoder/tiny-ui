### Clear star

Support set allow to clear star when click again.

<!--start-code-->

```jsx
render(
  <>
    <Rate defaultValue={3} /> clearable: true
    <br />
    <Rate clearable={false} defaultValue={3} /> clearable: false
  </>
);
```

<!--end-code-->
