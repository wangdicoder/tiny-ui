### Dynamic progress

Control the value

<!--start-code-->

```jsx
const { Bar, Circle } = Progress;
const { Group } = Button;

const Wrapper = () => {
  const [percent, setPercent] = React.useState(0);

  return (
    <div>
      <Group style={{ marginBottom: 20 }}>
        <Button onClick={() => (percent > 0) && setPercent(percent - 10)}>-</Button>
        <Button onClick={() => (percent < 100) && setPercent(percent + 10)}>+</Button>
      </Group>
      
      <Bar percent={percent} />
      <Circle percent={percent} />
    </div>
  );
};

render(
  <Wrapper />
);
```

<!--end-code-->
