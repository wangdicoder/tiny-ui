<demo>

### Basic

A simple usage.

```jsx live
class BasicExample extends React.PureComponent{

  constructor() {
    super();
    this.state = {
      current: 1,
    };
    this.btnOnClick = this.btnOnClick.bind(this);
  }

  btnOnClick() {
    let { current } = this.state;
    if(current < 3) {
      current++;
    } else {
      current = 0;
    }
    this.setState({ current });
  };

  render(){
    return (
      <div>
        <StrengthIndicator current={this.state.current}/>
        <br />
        <Button btnType="primary" onClick={this.btnOnClick}>Next</Button>
      </div>
    );
  }
}
```

</demo>
