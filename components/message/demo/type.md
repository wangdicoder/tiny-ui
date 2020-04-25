<demo>

### Different types of message

Messages of `info`, `success`, `warning`, `error` and `loading` types.

```jsx live
() => {
  const onClick = (type) => {
    Message[type](`A ${type} type message.`);
  };
  
  return (
    <>
      <Button btnType="info" onClick={() => onClick('info')}>Info</Button>
      <Button btnType="success" onClick={() => onClick('success')}>Success</Button>
      <Button btnType="warning" onClick={() => onClick('warning')}>Warning</Button>
      <Button btnType="danger" onClick={() => onClick('error')}>Error</Button>
      <Button btnType="info" onClick={() => onClick('loading')}>Loading</Button>
    </>
  );
}
```

</demo>
