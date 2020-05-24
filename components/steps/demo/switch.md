<demo>

### Switch Step

Control the step.

```jsx live
() => {
  const [curr, setCurr] = React.useState(0);
  return (
    <>
      <Steps current={curr}>
        <Steps.Step title="Step 1" description="This is a description." />
        <Steps.Step title="Step 2" description="This is a description." />
        <Steps.Step title="Step 3" description="This is a description." />
        <Steps.Step title="Step 4" description="This is a description." />
      </Steps> 
      <br/><br/>
      <Button
        btnType="primary"
        onClick={() => {
          let next = curr + 1;
          if(next > 3) {
            next = 0;
          }
          setCurr(next);
        }}>
        Next
      </Button>
    </> 
  );
}
```

</demo>
