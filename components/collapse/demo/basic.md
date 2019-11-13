<demo>

### Basic Collapse

By default, any number of panels can be expanded at a time. The first panel is expanded in this example.

```jsx live
() => {
  const { Panel } = Collapse;
  
  const callback = (key) => {
    console.log(key);
  }
  
  const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;
  
  return (
    <Collapse defaultActiveKey={['1']} onChange={callback}>
      <Panel header="This is panel header 1" itemKey="1">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 2" itemKey="2">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 3" itemKey="3" disabled>
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
}
```

</demo>
