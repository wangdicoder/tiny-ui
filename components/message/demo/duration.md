<demo>

### Customize duration

Customize message display duration from default `3s` to `10s`.

```jsx live
() => {
  const onClick = () => {
    Message('This is a prompt message for success, and it will disappear in 10 seconds', 10000);
  };
  
  return (
    <Button onClick={onClick}>Customized display duration</Button>
  );
}
```

</demo>
