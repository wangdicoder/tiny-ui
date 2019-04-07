### Progress circular

A circular progress.

<!--start-code-->

```jsx
const { Circle } = Progress;

const style = {
    marginRight: '10px',
};

render(
  <div>
    <Circle percent={10} style={style}/>
    <Circle percent={30} strokeColor="yellow" style={style}/>
    <Circle percent={50} strokeColor="red" style={style}/>
    <Circle percent={70} strokeColor="blue" style={style}/>
    <Circle percent={100} strokeColor="blue" style={style}/>
    <Circle percent={100} strokeColor="green"/>
  </div>
);
```

<!--end-code-->
