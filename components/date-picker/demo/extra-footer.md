<demo>

### Extra Footer

Render extra content in the panel footer.

```jsx live
() => {
  return (
    <DatePicker
      placeholder="With extra footer"
      renderExtraFooter={() => <span style={{ fontSize: 12, color: '#999' }}>Select a business day</span>}
    />
  );
}
```

</demo>
