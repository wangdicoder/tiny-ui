<demo>

### Basic

A very simple dropdown.

```jsx live
<Dropdown overlay={(
    <Menu onSelect={(key) => Message.info(`Click on item ${key}`)}>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )}>
  <a onClick={e => e.preventDefault()}>
    Hover me <Icon name="down" size={12}/>
  </a>
</Dropdown>
```

</demo>
