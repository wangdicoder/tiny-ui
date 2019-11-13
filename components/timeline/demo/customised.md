<demo>

### Customise Dot

Set a node as an icon or other custom element.

```jsx live
<Timeline>
  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
  <Timeline.Item dot={<Icon type="attention" color="#f30" size={24}/>}>
      Solve initial network problems 2015-09-04
  </Timeline.Item>
  <Timeline.Item dot="QA">Technical testing 2015-09-12</Timeline.Item>
  <Timeline.Item>Network problems being solved 2015-09-20</Timeline.Item>
</Timeline>
```

</demo>
