### Basic

<!--start-code-->

```jsx

render(
  <>
    <Button onClick={() => LoadingBar.start()}>Start</Button>
    <Button onClick={() => LoadingBar.succeed()} color="green">Success</Button>
    <Button onClick={() => LoadingBar.fail()} color="red">Fail</Button>
  </>
);
```

<!--end-code-->
