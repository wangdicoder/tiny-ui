<demo>

### Controlled

Controlled page number.

```jsx live
() => {
  const [current, setCurrent] = React.useState(3);
  const onChange = (page) => {
    console.log(page);
    setCurrent(page);
  };
  
  return <Pagination current={current} onChange={onChange} total={50} />;
}
```

</demo>
