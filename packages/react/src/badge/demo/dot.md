<Demo>

### Red badge

Display a red badge without a specific count. 

```jsx live
() => {
  const badgeStyle = {
    marginRight: '20px'
  };
  
  return (
    <>
      <Badge dot style={badgeStyle}>
        <IconBroadcast />
      </Badge>
      <Badge dot={false} style={badgeStyle}>
        <IconBroadcast />
      </Badge>
      <Badge dot>
        <span>Something</span>
      </Badge>
    </>
  );
}
```

</Demo>
