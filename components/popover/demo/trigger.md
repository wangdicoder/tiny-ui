<demo>

### Three ways to trigger

Mouse to click, focus and move in.

```jsx live
() => {
  const content = (
    <div>
      <p>This is the content</p>
      <p>This is the content</p>
    </div>
  );

  return (
    <>
      <Popover content={content} title="Title" trigger="hover">
        <Button>Hover me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="focus">
        <Button>Focus me</Button>
      </Popover>
      <Popover content={content} title="Title" trigger="click">
        <Button>Click me</Button>
      </Popover>
    </>
  );
}
```

</demo>
