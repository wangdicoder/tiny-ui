### Customized Icon

The icon can be customized to any react node.

<!--start-code-->

```jsx
const btnOnClick = () => {
  Notification.open({
    title: 'Notification Title',
    description: 'This is the content of the notification. This is the content of the notification.',
    icon: <Icon type="broadcast" size={25} color="#1890ff" style={{marginRight: 15}}/>
  });
};

render(
  <Button color="primary" onClick={btnOnClick}>Notification with customised icon</Button>
);
```

<!--end-code-->
