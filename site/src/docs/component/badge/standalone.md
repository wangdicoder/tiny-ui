### Standalone

Used in standalone when children is empty.

<!--start-code-->

```jsx
const badgeStyle = {
  marginRight: '15px'
};

render(
  <>
    <Badge count={20} style={badgeStyle} />
    <Badge count={10} style={badgeStyle} color="#fff" badgeStyle={{ color: '#999', boxShadow: '0 0 0 1px #d9d9d9 inset' }} />
    <Badge count={100} style={badgeStyle} color="#52c41a"/>
  </>
);
```

<!--end-code-->
