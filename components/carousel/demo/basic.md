<demo>

### Basic

A basic carousel with autoplay.

```jsx live
() => {
  const itemStyle = {
    height: 200,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 24,
  };
  return (
    <Carousel>
      <Carousel.Item>
        <div style={{ ...itemStyle, background: '#364d79' }}>Slide 1</div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ ...itemStyle, background: '#6b8e23' }}>Slide 2</div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ ...itemStyle, background: '#8b4513' }}>Slide 3</div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ ...itemStyle, background: '#483d8b' }}>Slide 4</div>
      </Carousel.Item>
    </Carousel>
  );
}
```

</demo>
