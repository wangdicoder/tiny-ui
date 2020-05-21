<demo>

### Nest

Can be used nested.

```jsx live
<Split defaultSize={200} style={{ height: 300, border: '1px solid #dcdee2' }}>
  <div>
    Left
  </div>
  <div>
    <Split mode="horizontal">
      <div>
        Top
      </div>
      <div>
        Bottom
      </div>
    </Split>
  </div>
</Split>
```

</demo>
