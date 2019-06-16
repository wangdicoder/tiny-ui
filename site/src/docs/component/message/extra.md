### Extra action

Add an extra content to allow more action

<!--start-code-->

```jsx
const onClick = () => {
  Message.loading('Deleting...', 3000, null, {
    extra: <span style={{color: '#1890ff'}} onClick={() => Message.success('Undo successful')}>Undo</span>
  });
};

render(
  <Button color="red" onClick={onClick}>Delete</Button>
);
```

<!--end-code-->
