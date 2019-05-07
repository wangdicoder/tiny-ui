### Placement

There are 12 placement options available.

<!--start-code-->

```jsx
const Overlay = () => (
  <div style={{ padding: '0 20px' }}>
    <p>This is a content placeholder</p>
    <p>This is a content placeholder</p>
    <p>This is a content placeholder</p>
  </div>
)

render(
  <table>
    <tbody>
      <tr>
        <td></td>
        <td>
          <Popover overlay={<Overlay />} placement="topLeft">
            <Button>TL</Button>
          </Popover>
        </td>
        <td>
          <Popover overlay={<Overlay />} placement="topCenter">
            <Button>TC</Button>
          </Popover>
        </td>
        <td>
          <Popover overlay={<Overlay />} placement="topRight">
            <Button>TR</Button>
          </Popover>
        </td>
        <td></td>
      </tr>
      <tr>
        <td>
          <Popover overlay={<Overlay />} placement="leftTop">
            <Button>LT</Button>
          </Popover>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <Popover overlay={<Overlay />} placement="rightTop">
            <Button>RT</Button>
          </Popover>
        </td>
      </tr>
      <tr>
        <td>
          <Popover overlay={<Overlay />} placement="leftCenter">
            <Button>LC</Button>
          </Popover>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <Popover overlay={<Overlay />} placement="rightCenter">
            <Button>RC</Button>
          </Popover>
        </td>
      </tr>
      <tr>
        <td>
          <Popover overlay={<Overlay />} placement="leftBottom">
            <Button>LB</Button>
          </Popover>
        </td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <Popover overlay={<Overlay />} placement="rightBottom">
            <Button>RB</Button>
          </Popover>
        </td>
      </tr>
      <tr>
        <td></td>
        <td>
          <Popover overlay={<Overlay />} placement="bottomLeft">
            <Button>BL</Button>
          </Popover>
        </td>
        <td>
          <Popover overlay={<Overlay />} placement="bottomCenter">
            <Button>BC</Button>
          </Popover>
        </td>
        <td>
          <Popover overlay={<Overlay />} placement="bottomRight">
            <Button>BR</Button>
          </Popover>
        </td>
        <td></td>
      </tr>
    </tbody>
  </table>
);
```

<!--end-code-->
