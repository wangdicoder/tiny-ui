<demo>

### Active Background Style

Set `backgroundType` to display different bar backgrounds.

```jsx live
() => {
  const { Bar } = Progress;
  
  return (
    <div>
      <Bar percent={50} backgroundType="impulse"/>
      <Bar percent={50} backgroundType="striped"/>
    </div>
  );
}
```

</demo>
