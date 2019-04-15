### Red badge

Display a red badge without a specific count. 

<!--start-code-->

```jsx
const badgeStyle = {
  marginRight: '20px'
};

render(
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
```

<!--end-code-->
