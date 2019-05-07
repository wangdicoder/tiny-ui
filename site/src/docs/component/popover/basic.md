### Basic

<!--start-code-->

```jsx
const style = {
  marginRight: 20,
  color: '#6E41BF'
};

const Overlay = () => (
  <div style={{ padding: '0 20px' }}>
    <p>This is a content placeholder</p>
    <p>This is a content placeholder</p>
    <p>This is a content placeholder</p>
  </div>
)

render(
  <>
    <Popover overlay={<Overlay />}>
      <div style={style}>
        Hover to activate
      </div>
    </Popover>
    <Popover overlay={<Overlay />} trigger="click">
      <div style={style}>
        Click to activate
      </div>
    </Popover>
    <Popover overlay={<Overlay />} trigger="contextMenu">
      <div style={style}>
        Right Click to activate
      </div>
    </Popover>
  </>
);
```

<!--end-code-->
