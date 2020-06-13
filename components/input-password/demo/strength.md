<demo>

### Integrate with `StrengthIndicator`

Work with `StrengthIndicator` component.

```jsx live
class Example extends React.PureComponent{

  constructor() {
    super();
    this.state = {
      password: '',
    };
  }

  checkPwd(str) {
    const { length } = str;
    let lv = 0;
    if (str.length > 0 && str.length < 6) {
      return ++lv;
    }
    if(length > 8){
      lv++;
    } 
    if (/[0-9]/.test(str)) {
      lv++;
    }
    if (/[a-z]/.test(str)) {
      lv++;
    }
    if (/[A-Z]/.test(str)) {
      lv++;
    }
    if (/[\.|-|_]/.test(str)) {
      lv++;
    }

    return lv;
  }

  render(){
    return (
      <div>
        <InputPassword placeholder="Make it as stronger as possible" onChange={e => this.setState({ password: e.currentTarget.value })}/>
        <StrengthIndicator
          blocks={5}
          colors={['#f5222d', '#fa541c', '#faad14', '#a0d911', '#52c41a']}
          labels={['Very weak', 'Weak', 'Medium', 'Strong', 'Very strong']}
          current={this.checkPwd(this.state.password)}
          style={{ marginTop: 10 }}
        />
      </div>
    );
  }
}
```

</demo>
