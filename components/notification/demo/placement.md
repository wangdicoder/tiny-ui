<demo>

### Placement

A notification box can appear from the `topRight`, `bottomRight`, `bottomLeft` or `topLeft` of the viewport.

```jsx live
() => {
  const btnOnClick = (placement) => {
    Notification.open({
      title: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification.',
      placement,
    });
  };
  
  return (
    <>
      <Button color="primary" onClick={() => btnOnClick('topLeft')}>Top Left</Button>
      <Button color="primary" onClick={() => btnOnClick('topRight')}>Top Right</Button>
      <Button color="primary" onClick={() => btnOnClick('bottomLeft')}>Bottom Left</Button>
      <Button color="primary" onClick={() => btnOnClick('bottomRight')}>Bottom Right</Button>
    </>
  );
}
```

</demo>
