<Demo>

### Format

Toggle between `hex`, `rgb`, and `hsb` output formats.

```jsx live
() => {
  const [color, setColor] = React.useState('#1890ff');
  const [format, setFormat] = React.useState('hex');

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <ColorPicker
        value={color}
        format={format}
        onChange={setColor}
        onFormatChange={setFormat}
      />
      <span>Format: <strong>{format}</strong></span>
      <span>Value: {color}</span>
    </div>
  );
}
```

</Demo>
