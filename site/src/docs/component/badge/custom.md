### Colorful badge

Set `color` to display the dot badge with different colors. `processing` can show an wave animation.

> Only dot badge has `processing` effect.

<!--start-code-->

```jsx
render(
  <>
    <div><Badge dot /> Error</div>
    <div><Badge dot processing color="#1890ff"/> Processing</div>
    <div><Badge dot color="#52c41a" /> Successful</div>
    <div><Badge dot color="#faad14"/> Warning</div>
    <div><Badge dot processing color="#faad14"/> Warning with animation</div>
  </>
);
```

<!--end-code-->
