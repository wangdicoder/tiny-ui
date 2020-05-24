<demo>

### With Icon

Use a customised icon for `Step`.

```jsx live
<Steps current={2}>
  <Steps.Step title="Login" icon={<Icon name="user" size={32}/>} />
  <Steps.Step title="Verification" icon={<Icon name="view-file" size={32}/>}/>
  <Steps.Step title="Pay" icon={<Icon spin name="sync" size={32}/>}/>
  <Steps.Step title="Done" icon={<Icon name="check-circle1" size={32}/>}/>
</Steps>
```

</demo>
