<demo>

### Basic

Click the swatch to open the color picker panel.

```jsx live
() => {
  const [color, setColor] = React.useState('#6e41bf');

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <ColorPicker
        value={color}
        onChange={setColor}
        presets={['#f5222d', '#fa8c16', '#fadb14', '#52c41a', '#1890ff', '#722ed1']}
      />
      <span>{color}</span>
    </div>
  );
}
```

</demo>
