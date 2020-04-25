<demo>

### Extra action

Add an extra content to allow more action.

```jsx live
() => {
  const onClick = () => {
    Message.loading('Deleting...', 3000, null, {
      extra: (
        <span 
          style={{color: '#1890ff', cursor: 'pointer'}}
          onClick={() => Message.success('Undo successful')}>
          Undo
        </span>
      )
    });
  };
  
  return (
    <Button btnType="danger" onClick={onClick}>Delete</Button>
  );
}
```

</demo>
