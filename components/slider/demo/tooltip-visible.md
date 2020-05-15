<demo>

### Control visible of ToolTip

When `tooltipVisible` is true, `ToolTip` will always show even if dragging or hovering.

```jsx live
() => {
    const [show, setShow] = React.useState(true);

    return (
      <>
        <Slider tooltipVisible={show} defaultValue={50}/>
        <span>Tooltip visible:</span> <Switch checked={show} onChange={(checked) => setShow(checked)}/>
      </>
    );
}
```

</demo>
