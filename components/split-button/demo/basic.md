<demo>

### Basic

A simple usage.

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
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        Click Me
      </SplitButton>
      <SplitButton
        btnType="primary"
        onClick={() => Message.info('you clicked the button.')}
        overlay={menu}>
        Click Me
      </SplitButton>
    </>  
  );
}

```

</demo>
