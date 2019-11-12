<demo>

### Control the close time

If set the `duration` value to 0, the notification will never close automatically.

```jsx live
() => {
  const btnOnClick = () => {
    Notification.open({
      title: 'Notification Title',
      description: 'This notification only can be closed by clicking the close button',
      duration: 0,
    });
  };
  
  return (
    <Button color="primary" onClick={btnOnClick}>Open the notification box</Button>
  );
}
```

</demo>
