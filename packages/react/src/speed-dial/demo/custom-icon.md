<Demo>

### Custom Icon

Customize the FAB icon and the open icon.

```jsx live
() => {
  return (
    <div style={{ position: 'relative', height: 320 }}>
      <div style={{ position: 'absolute', bottom: 16, right: 16 }}>
        <SpeedDial
          icon={<IconPlus />}
          openIcon={<IconClose />}
        >
          <SpeedDial.Action icon={<IconBookmark />} tooltip="Save" />
          <SpeedDial.Action icon={<IconStar />} tooltip="Favorite" />
          <SpeedDial.Action icon={<IconShare />} tooltip="Share" />
        </SpeedDial>
      </div>
    </div>
  );
}
```

</Demo>
