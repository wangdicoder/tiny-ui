<demo>

### Button Group

Buttons can be grouped by placing multiple `Button` components into a Button.Group.

```jsx live
() => {
  const { Group } = Button;

  return (
    <>
      <div>
        <h4>Basic</h4>
        <Group>
          <Button>Go Left</Button>
          <Button>Go Right</Button>
        </Group>
        <br/>
        <Group btnType="primary">
          <Button>Normal Button</Button>
          <Button>Middle</Button>
          <Button>Normal Button</Button>
        </Group>
      </div>

      <div>
        <h4>Group props</h4>
        <Group size="lg">
          <Button>Go Left</Button>
          <Button>Go Right</Button>
        </Group>
        <br/>
        <Group btnType="primary" round>
          <Button disabled>Normal Button</Button>
          <Button>Middle</Button>
          <Button>Normal Button</Button>
        </Group>
        <br/>
        <Group btnType="green" disabled>
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
