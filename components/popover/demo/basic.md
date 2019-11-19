<demo>

### Basic

The simplest usage.

```jsx live
() => {
  const content = (
    <div>
      <p>This is the content</p>
      <p>This is the content</p>
    </div>
  );

  return (
    <Popover title="Title" content={content}>
      <Button color="primary">Hover me</Button>
    </Popover> 
  );
}
```

</demo>
