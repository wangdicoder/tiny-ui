### Basic

Different sizes setting by `size` and two shapes are available.

<!--start-code-->

```jsx
const style = {
  marginRight: 10
};

render(
  <>
    <div>
      <Avatar icon="user" size={70} style={style}/>
      <Avatar icon="user" size={50} style={style}/>
      <Avatar icon="user" style={style}/>
      <Avatar icon="user" size={24} style={style}/>
    </div>
    <br/>
    <div>
      <Avatar shape="square" icon="user" size={70} style={style}/>
      <Avatar shape="square" icon="user" size={50} style={style}/>
      <Avatar shape="square" icon="user" style={style}/>
      <Avatar shape="square" icon="user" size={24} style={style}/>
    </div>
  </>
)
```

<!--end-code-->
