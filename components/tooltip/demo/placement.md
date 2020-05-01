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
            <Tooltip title="popup text" placement="top-start">
              <Button style={btnStyle}>TS</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="top">
              <Button style={btnStyle}>Top</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="top-end">
              <Button style={btnStyle}>TE</Button>
            </Tooltip>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Tooltip title="popup text" placement="left-start">
              <Button style={btnStyle}>LS</Button>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="right-start">
              <Button style={btnStyle}>RS</Button>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td>
            <Tooltip title="popup text" placement="left">
              <Button style={btnStyle}>Left</Button>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="right">
              <Button style={btnStyle}>Right</Button>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td>
            <Tooltip title="popup text" placement="left-end">
              <Button style={btnStyle}>LE</Button>
            </Tooltip>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="right-end">
              <Button style={btnStyle}>RE</Button>
            </Tooltip>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Tooltip title="popup text" placement="bottom-start">
              <Button style={btnStyle}>BS</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="bottom">
              <Button style={btnStyle}>Bottom</Button>
            </Tooltip>
          </td>
          <td>
            <Tooltip title="popup text" placement="bottom-end">
              <Button style={btnStyle}>BE</Button>
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
