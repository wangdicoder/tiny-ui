<demo>

### Button Group

Buttons can be grouped by placing multiple `Button` components into a Button.Group.

```jsx live
() => {
  const { Group } = Button;

  return (
    <>
      <div>
        <h3>Basic</h3>
        <Group>
          <Button>Go Left</Button>
          <Button>Go Right</Button>
        </Group>
        <br/>
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
        <br/>
        <Group color="primary" round>
          <Button disabled>Normal Button</Button>
          <Button>Middle</Button>
          <Button>Normal Button</Button>
        </Group>
        <br/>
        <Group color="green" disabled>
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </Group>
      </div>
    </>
  );
}
```

</demo>
