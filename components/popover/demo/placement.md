<demo>

### Placement

There are 12 placement options available.

```jsx live
() => {
  const btnStyle = {
    width: 80,
  };

  const content = (
    <div>
      <p>This is the content</p>
      <p>This is the content</p>
    </div>
  );

  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="top-left">
              <Button style={btnStyle}>TL</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="top-center">
              <Button style={btnStyle}>Top</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="top-right">
              <Button style={btnStyle}>TR</Button>
            </Popover>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Popover title="Title" content={content} placement="left-top">
              <Button style={btnStyle}>LT</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="right-top">
              <Button style={btnStyle}>RT</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td>
            <Popover title="Title" content={content} placement="left-center">
              <Button style={btnStyle}>Left</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="right-center">
              <Button style={btnStyle}>Right</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td>
            <Popover title="Title" content={content} placement="left-bottom">
              <Button style={btnStyle}>LB</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="right-bottom">
              <Button style={btnStyle}>RB</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="bottom-left">
              <Button style={btnStyle}>BL</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="bottom-center">
              <Button style={btnStyle}>Bottom</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="bottom-right">
              <Button style={btnStyle}>BR</Button>
            </Popover>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
```

</demo>
