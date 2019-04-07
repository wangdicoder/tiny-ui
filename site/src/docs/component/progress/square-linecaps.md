### Square linecaps

By setting `strokeLinecap="square"`, you can change the linecaps from round to square.

<!--start-code-->

```jsx
const { Bar, Circle } = Progress;

render(
  <div>
    <Bar percent={80} strokeLinecap="square"/>
    <Circle percent={80} strokeLinecap="square"/>
  </div>
);
```

<!--end-code-->
