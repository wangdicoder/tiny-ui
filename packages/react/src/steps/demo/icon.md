<Demo>

### With Icon

Use a customised icon for `Step`.

```jsx live
() => {
  const SpinningSync = withSpin(IconSync);
  return (
    <Steps current={2}>
      <Steps.Step title="Login" icon={<IconUser size={32}/>} />
      <Steps.Step title="Verification" icon={<IconViewFile size={32}/>}/>
      <Steps.Step title="Pay" icon={<SpinningSync size={32}/>}/>
      <Steps.Step title="Done" icon={<IconCheckCircle1 size={32}/>}/>
    </Steps>
  );
}
```

</Demo>
