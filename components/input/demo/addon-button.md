<demo>

### Addon with Button

Add a button in `Addon` component to compose an input form, like search function.

> Pass `noBorder` prop to `Addon` component.

```jsx live
() => {
  const { Group, Addon } = Input;
  
  return (
    <div style={{ width: 400 }}>
      <Group size="sm">
        <Input/>
        <Addon noBorder>
          <Button color="primary" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: 0}}>
            <Icon name="search"/>
          </Button>
        </Addon>
      </Group>
      <br/>
      <Group>
        <Input/>
        <Addon noBorder>
          <Button color="primary" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: 0}}>
            <Icon name="search"/>
          </Button>
        </Addon>
      </Group>
      <br/>
      <Group size="lg">
        <Input/>
        <Addon noBorder>
          <Button color="primary" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: 0}}>
            Search
          </Button>
        </Addon>
      </Group>
    </div>
  );
}
```

</demo>
