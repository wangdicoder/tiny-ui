<Demo>

### Custom spinning indicator

Use custom loading indicator.

```jsx live
() => {
  const SpinningSync = withSpin(IconSync);
  return <Loader indicator={<SpinningSync size={25}/>}/>;
}
```

</Demo>
