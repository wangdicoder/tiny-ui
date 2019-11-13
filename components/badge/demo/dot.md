<demo>

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
        <Icon type="broadcast" />
      </Badge>
      <Badge dot={false} style={badgeStyle}>
        <Icon type="broadcast" />
      </Badge>
      <Badge dot>
        <span>Something</span>
      </Badge>
    </>
  );
}
```

</demo>
