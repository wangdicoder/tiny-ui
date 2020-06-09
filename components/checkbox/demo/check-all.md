<demo>

### Check all

The `indeterminate` property can help you to achieve a **check all** effect.

```jsx live
class CheckAllExample extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      checkboxVal: ['a', 'c'],
      indeterminate: true,
      checkAll: false,
    };
  }
  
  render() {
    const {checkboxVal, indeterminate, checkAll} = this.state;
    return (
      <>
        <div style={{ borderBottom: '1px solid rgb(233, 233, 233)', marginBottom: '15px' }}>
          <Checkbox
            onChange={e => {
              const { checked } = e.currentTarget;
              this.setState({
                checkboxVal: checked ? ['a', 'b', 'c']: [],
                indeterminate: false,
                checkAll: checked,
              });
            }}
            checked={checkAll}
            indeterminate={indeterminate}>
            Check All
          </Checkbox>
        </div>
      
        <Checkbox.Group
          value={checkboxVal} 
          onChange={(val) => {
            this.setState({
              checkboxVal: val,
              indeterminate: val.length < 3 && val.length > 0,
              checkAll: val.length === 3,
            });
          }}>
          <Checkbox value="a">A</Checkbox>
          <Checkbox value="b">B</Checkbox>
          <Checkbox value="c">C</Checkbox>
        </Checkbox.Group>
      </>
    );
  }
}
```

</demo>
