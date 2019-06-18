### Other Character

Replace the default star to other character like alphabet, digit, iconfont or even other language word.

<!--start-code-->

```jsx
render(
  <>
    <Rate defaultValue={2} character={<Icon type="heart-fill" size={25}/>} half color="#f30"/>
    <br />
    <Rate defaultValue={2} character="A" half style={{ fontSize: 30 }} />
    <br />
    <Rate defaultValue={2} character="好" half color="#4ca6ea" style={{ fontSize: 25 }}/>
    <br />
    <Rate defaultValue={2} character="하" half color="#3aa40d" style={{ fontSize: 25 }}/>
  </>
);
```

<!--end-code-->
