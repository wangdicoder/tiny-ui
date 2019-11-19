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
            <PopConfirm title="Are you sure to delete this?" content={content} placement="top-left">
              <Button style={btnStyle}>TL</Button>
            </PopConfirm>
          </td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="top-center">
              <Button style={btnStyle}>Top</Button>
            </PopConfirm>
          </td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="top-right">
              <Button style={btnStyle}>TR</Button>
            </PopConfirm>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="left-top">
              <Button style={btnStyle}>LT</Button>
            </PopConfirm>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="right-top">
              <Button style={btnStyle}>RT</Button>
            </PopConfirm>
          </td>
        </tr>
        <tr>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="left-center">
              <Button style={btnStyle}>Left</Button>
            </PopConfirm>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="right-center">
              <Button style={btnStyle}>Right</Button>
            </PopConfirm>
          </td>
        </tr>
        <tr>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="left-bottom">
              <Button style={btnStyle}>LB</Button>
            </PopConfirm>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="right-bottom">
              <Button style={btnStyle}>RB</Button>
            </PopConfirm>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="bottom-left">
              <Button style={btnStyle}>BL</Button>
            </PopConfirm>
          </td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="bottom-center">
              <Button style={btnStyle}>Bottom</Button>
            </PopConfirm>
          </td>
          <td>
            <PopConfirm title="Are you sure to delete this?" content={content} placement="bottom-right">
              <Button style={btnStyle}>BR</Button>
            </PopConfirm>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
```

</demo>
