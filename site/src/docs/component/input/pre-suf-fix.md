### Prefix & Suffix

Add prefix or suffix icons inside input.

<!--start-code-->

```jsx
const { Group, Addon } = Input;

const searchOnClick = (e) => {
  console.log(e);
}

render(
  <div style={{ width: 400 }}>
    <Input prefix="@@@@"/>
    <br/>
    <Input placeholder="your domain" suffix=".com" />
    <br/>
    <Input prefix="$" suffix=".00"/>
    <br/>
    <Input placeholder="Your name" prefix={<Icon type="user"/>}/>
    
    <h3>Suffix button</h3>
    <Input 
      placeholder="your domain" 
      suffix={<Icon type="search-left" onClick={searchOnClick} style={{ cursor: 'pointer' }}/>}
    />
  </div>
);
```

<!--end-code-->
