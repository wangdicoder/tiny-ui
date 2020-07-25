<demo>

### Different approaches to hide the menu 

The default is to close the menu when clicking on menu items, but you can also control the close action.

```jsx live
class CloseExample extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleMenuClick = this.handleMenuClick.bind(this);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
  }

  handleMenuClick(key) {
    if (key === '2') {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange(visible) {
    if(visible) {
      this.setState({ visible });
    }
  };

  renderOverlay() {
    return (
      <Menu onSelect={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will also not close the menu.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu.</Menu.Item>
      </Menu>    
    );
  } 

  render() {
    return (
      <Dropdown 
        overlay={this.renderOverlay()} 
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}>
        <a onClick={e => e.preventDefault()}>
          Hover me <Icon name="down" size={12}/>
        </a>
      </Dropdown>
    );
  }
}
```

</demo>
