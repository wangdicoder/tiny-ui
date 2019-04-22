### With icon

A relevant icon will make information clearer and more friendly. Use `iconSize` to set default icon size. You can also customise an icon by passing an element.

<!--start-code-->

```jsx
render(
  <>
    <Alert icon>Info alert</Alert>
    <Alert icon type="success">Success alert</Alert>
    <Alert icon type="warning">Warning alert</Alert>
    <Alert icon type="error">Error alert</Alert>
    
    <Alert icon iconSize={20} title="INFO">Info alert</Alert>
    <Alert icon iconSize={20} type="success" title="SUCCESS">Success alert</Alert>
    <Alert icon iconSize={20} type="warning" title="WARNING">Warning alert</Alert>
    <Alert icon iconSize={20} type="error" title="ERROR">Error alert</Alert>
  </>
);
```

<!--end-code-->
