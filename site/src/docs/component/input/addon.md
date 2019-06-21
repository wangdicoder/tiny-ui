### Addon

Using `Addon` example.

<!--start-code-->

```jsx
const { Group, Addon } = Input;

render(
  <div style={{ width: 400 }}>
    <Group>
      <Addon>@</Addon>
      <Input />
    </Group>
    <br/>
    <Group>
      <Input placeholder="your domain" />
      <Addon>.com</Addon>
    </Group>
    <br/>
    <Group>
      <Addon>$</Addon>
      <Input />
      <Addon>.00</Addon>
    </Group>
    <br/>
    <Group>
      <Input placeholder="From"/>
      <Addon>To</Addon>
      <Input placeholder="Destination"/>
    </Group>
    <br/>
    <Group>
      <Addon><Icon type="user"/></Addon>
      <Input placeholder="Your name"/>
    </Group>
  </div>
);
```

<!--end-code-->
