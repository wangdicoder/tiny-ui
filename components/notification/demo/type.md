<demo>

### Different types of notification

A notification box with a icon at the left side.

```jsx live
() => {
  const btnOnClick = (type) => {
    Notification[type]({
      title: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  
  return (
    <>
      <Button btnType="info" onClick={() => btnOnClick('info')}>Info</Button>
      <Button btnType="success" onClick={() => btnOnClick('success')}>Success</Button>
      <Button btnType="warning" onClick={() => btnOnClick('warning')}>Warning</Button>
      <Button btnType="danger" onClick={() => btnOnClick('error')}>Error</Button>
    </>
  );
}
```

</demo>
