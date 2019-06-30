### Button Group

Buttons can be grouped by placing multiple `Button` components into a Button.Group.

<!--start-code-->

```jsx
const { Group } = Button;

render(
<>
  <div>
    <h3>Basic</h3>
    <Group>
      <Button>Go Left</Button>
      <Button>Go Right</Button>
    </Group>
    
    <Group color="primary">
      <Button>Normal Button</Button>
      <Button>Middle</Button>
      <Button>Normal Button</Button>
    </Group>
  </div>
  
  <div>
    <h3>Group props</h3>
    <Group size="lg">
      <Button>Go Left</Button>
      <Button>Go Right</Button>
    </Group>
    
    <Group color="primary" round>
      <Button disabled>Normal Button</Button>
      <Button>Middle</Button>
      <Button>Normal Button</Button>
    </Group>
                    
    <Group color="green" disabled>
      <Button>Left</Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </Group>
  </div>
</>
);
```

<!--end-code-->
