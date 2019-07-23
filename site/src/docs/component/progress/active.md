### Active Background Style

Set `backgroundType` to display different bar backgrounds.

<!--start-code-->

```jsx
const { Bar } = Progress;

render(
  <div>
    <Bar percent={50} backgroundType="impulse"/>
    <Bar percent={50} backgroundType="striped"/>
  </div>
);
```

<!--end-code-->
