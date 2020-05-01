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
      <div>This is the content</div>
      <div>This is the content</div>
    </div>
  );

  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="top-start">
              <Button style={btnStyle}>TL</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="top">
              <Button style={btnStyle}>Top</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="top-end">
              <Button style={btnStyle}>TR</Button>
            </Popover>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Popover title="Title" content={content} placement="left-start">
              <Button style={btnStyle}>LT</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="right-start">
              <Button style={btnStyle}>RT</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td>
            <Popover title="Title" content={content} placement="left">
              <Button style={btnStyle}>Left</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="right">
              <Button style={btnStyle}>Right</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td>
            <Popover title="Title" content={content} placement="left-end">
              <Button style={btnStyle}>LB</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="right-end">
              <Button style={btnStyle}>RB</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Popover title="Title" content={content} placement="bottom-start">
              <Button style={btnStyle}>BL</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="bottom">
              <Button style={btnStyle}>Bottom</Button>
            </Popover>
          </td>
          <td>
            <Popover title="Title" content={content} placement="bottom-end">
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
