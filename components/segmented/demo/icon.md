<demo>

### With Icons

Add icons to segmented options using the `icon` property.

```jsx live
() => {
  return (
    <Segmented
      options={[
        { label: 'User', value: 'user', icon: <Icon name="user" /> },
        { label: 'Star', value: 'star', icon: <Icon name="star" /> },
        { label: 'Wifi', value: 'wifi', icon: <Icon name="wifi" /> },
      ]}
    />
  );
}
```

</demo>
