<demo>

### Wrap

Flex items wrap automatically when `wrap` is set.

```jsx live
() => (
  <Flex wrap="wrap" gap="sm">
    {Array.from({ length: 24 }, (_, i) => (
      <Button key={i} btnType="primary">Button</Button>
    ))}
  </Flex>
)
```

</demo>
