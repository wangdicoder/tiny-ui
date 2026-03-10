<demo>

### Custom Trigger

Use custom children to replace the default button.

```jsx live
() => {
  return (
    <BackTop visibilityHeight={100} style={{ bottom: 100 }}>
      <div style={{
        width: 40,
        height: 40,
        borderRadius: 4,
        backgroundColor: '#6e41bf',
        color: '#fff',
        textAlign: 'center',
        lineHeight: '40px',
        fontSize: 14,
      }}>
        UP
      </div>
    </BackTop>
  );
}
```

</demo>
