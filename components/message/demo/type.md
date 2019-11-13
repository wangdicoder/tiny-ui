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
      <Button color="blue" onClick={() => onClick('info')}>Info</Button>
      <Button color="green" onClick={() => onClick('success')}>Success</Button>
      <Button color="yellow" onClick={() => onClick('warning')}>Warning</Button>
      <Button color="red" onClick={() => onClick('error')}>Error</Button>
      <Button color="blue" onClick={() => onClick('loading')}>Loading</Button>
    </>
  );
}
```

</demo>
