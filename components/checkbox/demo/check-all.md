<demo>

### Check all

The `indeterminate` property can help you to achieve a **check all** effect.

```jsx live
() => {
  const { Group } = Checkbox;
  
  const Wrapper = () => {
    const [checkboxVal, setCheckboxVal] = React.useState(['a', 'c']);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const [checkAll, setCheckAll] = React.useState(false);
    
    return (
      <>
        <div style={{ borderBottom: '1px solid rgb(233, 233, 233)', marginBottom: '15px' }}>
          <Checkbox
            onChange={val => {
              val ? setCheckboxVal(['a', 'b', 'c']) : setCheckboxVal([]);
              setIndeterminate(false);
              setCheckAll(val);
            }}
            checked={checkAll}
            indeterminate={indeterminate}>
            Check All
          </Checkbox>
        </div>
      
        <Group
          value={checkboxVal} 
          onChange={(val) => {
            setCheckboxVal(val);
            setCheckAll(val.length === 3);
            setIndeterminate(val.length < 3 && val.length > 0);
          }}>
            <Checkbox value="a">A</Checkbox>
            <Checkbox value="b">B</Checkbox>
            <Checkbox value="c">C</Checkbox>
        </Group>
      </>
    );
  };
  
  return (
    <Wrapper />
  );
}
```

</demo>
