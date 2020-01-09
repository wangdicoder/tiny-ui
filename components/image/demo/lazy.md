<demo>

### Lazy Load

Display a rounded image.

```jsx live
() => {
  const ref = React.useRef();

  return (
    <div ref={ref} style={{ height: 250, overflowY: 'scroll' }}>
      <p>Scroll up to make images into the view area.</p>
      <div style={{ height: 350 }}/>
      <Image lazy round src="https://github.com/wangdicoder/tiny-ui/blob/master/site/public/avatar/avatar3.png?raw=true" placeholder="https://github.com/wangdicoder/tiny-ui/blob/master/site/public/avatar/avatar3_blur.png?raw=true"/>
      <div style={{ height: 350 }}/>
      <Image lazy width={300} height={200} src="https://github.com/wangdicoder/tiny-ui/blob/master/site/public/avatar/plants.jpg?raw=true" placeholder="https://github.com/wangdicoder/tiny-ui/blob/master/site/public/avatar/plants_blur.png?raw=true"/>
      <div style={{ height: 100 }}/>
    </div>
  );
}
```

</demo>
