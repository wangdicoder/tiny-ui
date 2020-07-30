<demo>

### Placement

Set the placement of the dropdown menu. The default placement is `bottom-end`.

```jsx live
() => {
  const menu = (
    <Menu onSelect={(key) => Message.info(`you clicked the menu ${key}.`)}>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  );
  
  return (
    <>
      <SplitButton
        dropdownPlacement="top-start"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        TopLeft
      </SplitButton>
      <SplitButton
        dropdownPlacement="top"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        Top
      </SplitButton>
      <SplitButton
        dropdownPlacement="top-end"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        TopRight
      </SplitButton>
      <br />
      <SplitButton
        dropdownPlacement="bottom-start"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        bottomLeft
      </SplitButton>
      <SplitButton
        dropdownPlacement="bottom"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        bottom
      </SplitButton>
      <SplitButton
        dropdownPlacement="bottom-end"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        bottomRight
      </SplitButton>
    </>  
  );
}
```

</demo>
