### Prefix & Suffix

Add prefix or suffix icons inside input.

<!--start-code-->

```jsx
const { Group, Addon } = Input;

render(
  <div style={{ width: 400 }}>
    <Input prefix="@@@@"/>
    <br/>
    <Input placeholder="your domain" suffix=".com" />
    <br/>
    <Input prefix="$" suffix=".00"/>
    <br/>
    <Input placeholder="Your name" prefix={<Icon type="user"/>}/>
  </div>
);
```

<!--end-code-->
