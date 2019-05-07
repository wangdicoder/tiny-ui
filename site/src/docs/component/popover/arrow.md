### Arrow

Arrowing to the trigger is also available.

<!--start-code-->

```jsx
const style = {
  marginRight: 20,
  color: '#6E41BF'
};

const buttonWidth = 70;

const Overlay = () => (
  <div style={{ padding: '0 20px' }}>
    <p>This is a content placeholder</p>
    <p>This is a content placeholder</p>
    <p>This is a content placeholder</p>
  </div>
)

render(
  <>
    <div style={{ marginLeft: buttonWidth, whiteSpace: 'nowrap' }}>
      <Popover placement="topLeft" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>TL</Button>
      </Popover>
      <Popover placement="topCenter" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>TC</Button>
      </Popover>
      <Popover placement="topRight" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>TR</Button>
      </Popover>
    </div>
    <div style={{ width: buttonWidth, float: 'left' }}>
      <Popover placement="leftTop" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>LT</Button>
      </Popover>
      <Popover placement="leftCenter" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>LC</Button>
      </Popover>
      <Popover placement="leftBottom" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>LB</Button>
      </Popover>
    </div>
    <div style={{ width: buttonWidth, marginLeft: (buttonWidth * 4) + 24 }}>
      <Popover placement="rightTop" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>RT</Button>
      </Popover>
      <Popover placement="rightCenter" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>RC</Button>
      </Popover>
      <Popover placement="rightBottom" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>RB</Button>
      </Popover>
    </div>
    <div style={{ marginLeft: buttonWidth, clear: 'both', whiteSpace: 'nowrap' }}>
      <Popover placement="bottomLeft" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>BL</Button>
      </Popover>
      <Popover placement="bottomCenter" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>BC</Button>
      </Popover>
      <Popover placement="bottomRight" overlay={<Overlay />} arrow>
        <Button style={{ width: buttonWidth }}>BR</Button>
      </Popover>
    </div>
  </>
);
```

<!--end-code-->
