<Demo>

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
      <Flex gap="sm">
        <Button btnType="primary" onClick={() => btnOnClick('topLeft')}>Top Left</Button>
        <Button btnType="primary" onClick={() => btnOnClick('topRight')}>Top Right</Button>
      </Flex>
      <br />
      <Flex gap="sm">
        <Button btnType="primary" onClick={() => btnOnClick('bottomLeft')}>Bottom Left</Button>
        <Button btnType="primary" onClick={() => btnOnClick('bottomRight')}>Bottom Right</Button>
      </Flex>
    </>
  );
}
```

</Demo>
