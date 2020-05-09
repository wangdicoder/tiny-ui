<demo>

### Basic

```jsx live
() => {
  const log = (e) => {
    console.log(e);
  }
  
  const preventDefault = (e) => {
    e.preventDefault();
    Message('Clicked! But prevent default.');
  }
  
  return (
    <>
      <Tag>Tag 1</Tag>
      <Tag>
        <a href="https://github.com">Link</a>
      </Tag>
      <Tag closable onClose={log}>
        Tag 2
      </Tag>
      <Tag closable onClose={preventDefault}>
        Prevent Default
      </Tag>
    </>
  );
}
```

</demo>
