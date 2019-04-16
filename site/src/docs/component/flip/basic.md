### Basic

A basic flip

> **The flip's width and height must be set**

<!--start-code-->

```jsx
const { Item } = Flip;

const itemStyle = {
  color: '#fff',
  lineHeight: '200px',
  fontSize: '18px',
};

render(
  <Flip height={200} width={400}>
    <Item style={{ ...itemStyle, backgroundColor: '#00bcd4' }}>
      I'm front
    </Item>
    <Item style={{ ...itemStyle, backgroundColor: '#ff9800' }}>
      I'm back
    </Item>
  </Flip>
);
```

<!--end-code-->
