### Custom text format

Set a custom text by setting the `format` prop.

<!--start-code-->

```jsx
const { Bar, Circle } = Progress;
const { Group } = Button;

let label = '';

const _barText = (val) => {

  if (val < 100)
    label = `${val} Days`;
  else 
    label = 'Done';
    
  return (
    <span style={{ margin: '0 5px' }}>{label}</span>
  );
};

const Wrapper = () => {
  const [percent, setPercent] = React.useState(90);

  return (
    <div>
      <Group style={{ marginBottom: 20 }}>
        <Button onClick={() => (percent > 0) && setPercent(percent - 10)}>-</Button>
        <Button onClick={() => (percent < 100) && setPercent(percent + 10)}>+</Button>
      </Group>
      
      <Bar percent={percent} format={_barText} />
      <Circle percent={percent} format={_barText} />
    </div>
  );
};

render(
  <Wrapper />
);
```

<!--end-code-->
