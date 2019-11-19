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
            <Tooltip title="popup text" placement="top-left">
              <Button style={btnStyle}>TL</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="top-center">
              <Button style={btnStyle}>Top</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="top-right">
              <Button style={btnStyle}>TR</Button>
            </Tooltip>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Tooltip title="popup text" placement="left-top">
              <Button style={btnStyle}>LT</Button>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="right-top">
              <Button style={btnStyle}>RT</Button>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td>
            <Tooltip title="popup text" placement="left-center">
              <Button style={btnStyle}>Left</Button>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="right-center">
              <Button style={btnStyle}>Right</Button>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td>
            <Tooltip title="popup text" placement="left-bottom">
              <Button style={btnStyle}>LB</Button>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="right-bottom">
              <Button style={btnStyle}>RB</Button>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="bottom-left">
              <Button style={btnStyle}>BL</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="bottom-center">
              <Button style={btnStyle}>Bottom</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="bottom-right">
              <Button style={btnStyle}>BR</Button>
            </Tooltip>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
```

</demo>
