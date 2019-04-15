### Type

Image, Icon and letter are supported, and the latter two kinds avatar can have custom colors and background colors.

<!--start-code-->

```jsx
const style = {
  marginRight: 10
};

render(
  <>
    <Avatar icon="user" style={style}/>
    <Avatar style={style}>U</Avatar>
    <Avatar style={style}>USER</Avatar>
    <Avatar src="https://redux.js.org/img/redux_white.svg" style={{ ...style, padding: '5px', backgroundColor: '#764abc' }}/>
    <Avatar style={{ ...style, color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
    <Avatar style={{ ...style, backgroundColor: '#87d068' }} icon="user" />
  </>
)
```

<!--end-code-->
