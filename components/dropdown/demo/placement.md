<demo>

### Placement

Support 6 placements.

```jsx live
class PlacementExample extends React.PureComponent {
  renderOverlay() {
    return (
      <Menu onSelect={(key) => Message.info(`Click on item ${key}`)}>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <Menu.Item>3rd menu item</Menu.Item>
      </Menu>    
    );
  } 

  render() {
    return (
      <div>
        <Dropdown overlay={this.renderOverlay()} placement="bottom-start">
          <Button>bottomLeft</Button>
        </Dropdown>
        <Dropdown overlay={this.renderOverlay()} placement="bottom">
          <Button>bottomCenter</Button>
        </Dropdown>
        <Dropdown overlay={this.renderOverlay()} placement="bottom-end">
          <Button>bottomRight</Button>
        </Dropdown>
        <br />
        <br />
        <Dropdown overlay={this.renderOverlay()} placement="top-start">
          <Button>topLeft</Button>
        </Dropdown>
        <Dropdown overlay={this.renderOverlay()} placement="top">
          <Button>topCenter</Button>
        </Dropdown>
        <Dropdown overlay={this.renderOverlay()} placement="top-end">
          <Button>topRight</Button>
        </Dropdown>
      </div> 
    );
  }
}
```

</demo>
