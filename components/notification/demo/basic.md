<demo>

### Basic

The simplest usage that close the notification box after 4.5s.

```jsx live
() => {
  const btnOnClick = () => {
    Notification.open({
      title: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };
  
  return <Button color="primary" onClick={btnOnClick}>Open the notification box</Button>;
}
```

</demo>
