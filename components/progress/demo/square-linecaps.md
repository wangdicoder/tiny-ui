<demo>

### Square linecaps

By setting `strokeLinecap="square"`, you can change the linecaps from round to square.

```jsx live
() => {
  const { Bar, Circle } = Progress;
  
  return (
    <div>
      <Bar percent={80} strokeLinecap="square"/>
      <Circle percent={80} strokeLinecap="square"/>
    </div>
  );
}
```

</demo>
