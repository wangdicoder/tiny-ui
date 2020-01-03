<demo>

### Prefix & Suffix

Add prefix or suffix icons inside input.

```jsx live
() => {
  const { Group, Addon } = Input;
  
  const searchOnClick = (e) => {
    console.log(e);
  }
  
  return (
    <div style={{ width: 400 }}>
      <Input prefix="@@@@"/>
      <br/>
      <Input placeholder="your domain" suffix=".com" />
      <br/>
      <Input prefix="$" suffix=".00"/>
      <br/>
      <Input placeholder="Your name" prefix={<Icon name="user"/>}/>
      
      <h3>Suffix button</h3>
      <Input 
        placeholder="your domain" 
        suffix={<Icon name="search" onClick={searchOnClick} style={{ cursor: 'pointer' }}/>}
      />
    </div>
  );
}
```

</demo>
