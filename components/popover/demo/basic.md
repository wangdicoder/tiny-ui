<demo>

### Basic

The simplest usage.

```jsx live
() => {
  const content = (
    <div>
      <div>This is the content</div>
      <div>This is the content</div>
    </div>
  );

  return (
    <Popover trigger="hover" title="Title" content={content}>
      <Button btnType="primary">Hover me</Button>
    </Popover> 
  );
}
```

</demo>
