<Demo>

### Custom Content

Overlay can wrap any custom content rendered above the mask.


```jsx live
() => {
  const Wrapper = () => {
    const [isShow, setIsShow] = React.useState(false);

    return (
      <>
        <Button btnType="primary" onClick={() => setIsShow(true)}>Custom Content</Button>
        <Overlay isShow={isShow} clickCallback={() => setIsShow(false)}>
          <div
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: '#fff',
              borderRadius: 8,
              padding: '24px 32px',
              textAlign: 'center',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ margin: '0 0 12px' }}>Custom Panel</h3>
            <p style={{ margin: '0 0 16px', color: '#666' }}>This content is rendered inside the overlay.</p>
            <Button btnType="primary" onClick={() => setIsShow(false)}>Close</Button>
          </div>
        </Overlay>
      </>
    );
  };

  return <Wrapper />;
}
```

</Demo>
