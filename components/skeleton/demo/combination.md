<demo>

### Combination

A complex example.

> Consider using `<ConfigProvider/>` to set `active` prop in once.

```jsx live
<ConfigProvider shimmer>
  <Row>
    <Col span={2}>
      <Skeleton rounded style={{ width: 50, height: 50}}/>
    </Col>
    <Col span={22}>
      <div>
        <Skeleton style={{ width: 300 }}/>
      </div>
      <div>
        <Skeleton style={{ width: 300 }}/>
      </div>
    </Col>
  </Row>
  <Skeleton />
  <Skeleton />
  <Skeleton />
</ConfigProvider>
```

</demo>
