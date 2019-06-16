### Customize duration

Customize message display duration from default `3s` to `10s`.

<!--start-code-->

```jsx
const onClick = () => {
  Message('This is a prompt message for success, and it will disappear in 10 seconds', 10000);
};

render(
  <Button onClick={onClick}>Customized display duration</Button>
);
```

<!--end-code-->
