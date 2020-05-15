<demo>

### Vertical mode

Use `direction` to create a vertical slider.

```jsx live
() => {
  const style = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
  };

  const marks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: { color: '#f30' },
      label: <strong>100°C</strong>,
    },
  };

  return (
    <>
      <div style={style}>
        <Slider direction="vertical" defaultValue={30} />
      </div>
      <div style={style}>
        <Slider direction="vertical" step={10} defaultValue={[20, 50]} />
      </div>
      <div style={style}>
        <Slider direction="vertical" marks={marks} defaultValue={[26, 37]} />
      </div>
    </>
  );
}
```

</demo>
