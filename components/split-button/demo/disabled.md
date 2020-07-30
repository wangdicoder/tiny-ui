<demo>

### Disabled

Disabled the button.

```jsx live
<SplitButton
  disabled
  onClick={() => Message.info('you clicked the button.')}
  overlay={(
    <Menu onSelect={(key) => Message.info(`you clicked the menu ${key}.`)}>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
    </Menu>
  )}>
  Click Me
</SplitButton>
```

</demo>
