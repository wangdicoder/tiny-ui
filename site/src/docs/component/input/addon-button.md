### Addon with Button

Add a button in `Addon` component to compose an input form, like search function.

<!--start-code-->

```jsx
const { Group, Addon } = Input;

render(
  <div style={{ width: 400 }}>
    <Group size="sm">
      <Input/>
      <Addon noBorder>
        <Button size="sm" block color="primary" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: 0}}>
          <Icon type="search-left"/>
        </Button>
      </Addon>
    </Group>
    <br/>
    <Group>
      <Input/>
      <Addon noBorder>
        <Button block color="primary" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: 0}}>
          <Icon type="search-left"/>
        </Button>
      </Addon>
    </Group>
    <br/>
    <Group size="lg">
      <Input/>
      <Addon noBorder>
        <Button size="lg" block color="primary" style={{borderTopLeftRadius: 0, borderBottomLeftRadius: 0, marginRight: 0}}>
          Search
        </Button>
      </Addon>
    </Group>
  </div>
);
```

<!--end-code-->
