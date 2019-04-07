### Progress bar

A standard progress bar.

<!--start-code-->

```jsx
const { Bar } = Progress;

render(
  <div>
    <Bar percent={10} />
    <Bar percent={30} strokeColor="yellow"/>
    <Bar percent={50} strokeColor="green"/>
    <Bar percent={70} strokeColor="red"/>
    <Bar percent={100} strokeColor="blue"/>
    <Bar percent={100} strokeColor="pink" showInfo={false}/>
  </div>
);
```

<!--end-code-->
