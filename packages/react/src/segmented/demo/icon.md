<Demo>

### With Icons

Add icons to segmented options using the `icon` property.

```jsx live
() => {
  return (
    <Segmented
      options={[
        { label: 'User', value: 'user', icon: <IconUser /> },
        { label: 'Star', value: 'star', icon: <IconStar /> },
        { label: 'Wifi', value: 'wifi', icon: <IconWifi /> },
      ]}
    />
  );
}
```

</Demo>
