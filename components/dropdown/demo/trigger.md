<demo>

### Trigger mode

Open the menu by clicking.

```jsx live
<Dropdown trigger="click" overlay={(
    <Menu onSelect={(key) => Message.info(`Click on item ${key}`)}>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )}>
  <a onClick={e => e.preventDefault()}>
    Click me <Icon name="down" size={12}/>
  </a>
</Dropdown>
```

</demo>
