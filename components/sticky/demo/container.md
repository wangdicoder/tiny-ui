<demo>

### Container to scroll.

Set a target for `Sticky`, which is listen to scroll event of target element (default is `window`).

```jsx live
() => {
  const containerStyle = {
    height: 130,
    overflowY: 'scroll',
  };

  const bgStyle = {
    paddingTop: 60,
    height: 500,
    backgroundColor: '#dfdfdf',
  };

  const containerRef = React.useRef(null);

  return (
  <div style={containerStyle} ref={containerRef}>
    <div style={bgStyle}>
      <Sticky container={() => containerRef.current}>
        <Button btnType="primary">Fixed at the top of container</Button>
      </Sticky>
    </div>
  </div>
  );
}
```

</demo>
