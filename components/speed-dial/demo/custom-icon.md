<demo>

### Custom Icon

Customize the FAB icon and the open icon.

```jsx live
() => {
  return (
    <div style={{ position: 'relative', height: 320 }}>
      <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
        <SpeedDial
          icon={<Icon name="plus" />}
          openIcon={<Icon name="close" />}
        >
          <SpeedDial.Action icon={<Icon name="bookmark" />} tooltip="Save" />
          <SpeedDial.Action icon={<Icon name="star" />} tooltip="Favorite" />
          <SpeedDial.Action icon={<Icon name="share" />} tooltip="Share" />
        </SpeedDial>
      </div>
    </div>
  );
}
```

</demo>
