<demo>

### Placement

There are 12 placement options available.

```jsx live
() => {
  const content = (
    <div style={{ padding: '0 20px' }}>
      <p>This is a content placeholder</p>
      <p>This is a content placeholder</p>
      <p>This is a content placeholder</p>
    </div>
  );

  return (
    <table>
      <tbody>
        <tr>
          <td></td>
          <td>
            <Popover content={content} placement="top-left">
              <Button>TL</Button>
            </Popover>
          </td>
          <td>
            <Popover content={content} placement="top-center">
              <Button>TC</Button>
            </Popover>
          </td>
          <td>
            <Popover content={content} placement="top-right">
              <Button>TR</Button>
            </Popover>
          </td>
          <td></td>
        </tr>
        <tr>
          <td>
            <Popover content={content} placement="left-top">
              <Button>LT</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover content={content} placement="right-top">
              <Button>RT</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td>
            <Popover content={content} placement="left-center">
              <Button>LC</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover content={content} placement="right-center">
              <Button>RC</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td>
            <Popover content={content} placement="left-bottom">
              <Button>LB</Button>
            </Popover>
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <Popover content={content} placement="right-bottom">
              <Button>RB</Button>
            </Popover>
          </td>
        </tr>
        <tr>
          <td></td>
          <td>
            <Popover content={content} placement="bottom-left">
              <Button>BL</Button>
            </Popover>
          </td>
          <td>
            <Popover content={content} placement="bottom-center">
              <Button>BC</Button>
            </Popover>
          </td>
          <td>
            <Popover content={content} placement="bottom-right">
              <Button>BR</Button>
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
